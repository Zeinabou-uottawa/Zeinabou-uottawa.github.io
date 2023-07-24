import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { data } from "./JewelryList";
import JewelryItems from './JewelryItems';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Facets_container from './Facets_container';
import "./jewelry.css";


function Jewelry() {

  const build_categorical_facet_values = (name) => {
    const values = [...new Set(data.map(item => item[name]))]
    return values.map(value => ({ 'name': value, 'checked': false }))
  }

  // Initial state
  const [state, setState] = useState({
    all_clothes: data,
    shown_clothes: data,
    facets: {
      type: build_categorical_facet_values('type'),
      material: build_categorical_facet_values('material')
    }
  })


  //Updates state.shown_clothes whenever state.facets changes
  useEffect(() => {
    const facets = {}
    // Get all the facet values that are true/active/selected.
    Object.entries(state.facets).forEach(([name, values]) => {
      facets[name] = []
      values.forEach(value => {
        if (value.checked) {
          facets[name].push(value.name)
        }
      })
    })


    // If there are no facets selected, show all clothes
    if (Object.values(facets).every(arr => arr.length === 0)) {
      setState({ ...state, shown_clothes: state.all_clothes })
      return
    }

    // Getting the number of active facet (Not facet_values)
    const number_of_active_facets = Object.values(facets).filter(x => x.length).length

    // Double loop through all clothes and all active facets
    // Keep only the clothes that match the active facets
    const to_show = state.all_clothes.map(clothe =>
      Object.entries(facets).map(([name, values]) =>
        values.includes(clothe[name])).filter(Boolean).length == number_of_active_facets ? clothe : undefined
    ).filter(Boolean)

    setState({ ...state, shown_clothes: to_show })
  }, [state.facets])

  function clearAllFacetValues(facet) {
    const new_facet = state.facets[facet].map(facet_value => ({
      ...facet_value, checked: false
    }))
    setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })
  }

  // Function to pass down to the Facet_value component to modify the state in this component.
  function updateCategory(facet, value, newChecked) {
    const new_facet = state.facets[facet].map(({ name, checked }) => ({ name: name, checked: name == value ? newChecked : checked }))
    setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })
  }

  
  return (
    <div className="jewelry-page">

      <Row>
        <Col className='border-end' md={3}>
          <Facets_container  facets={state.facets} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} className="facet-container"/>
        </Col>
        <Col xs={9}>
        <Container>
            <Row>
              {state.shown_clothes.map((jewelryItem) => (
                <Col sm={4} key={jewelryItem.id}  >
                  {/* Set the Col's size (sm, md, lg) to control the number of items per row */}
                  <JewelryItems
                    name={jewelryItem.name}
                    price={jewelryItem.price}
                    material={jewelryItem.material}
                    type={jewelryItem.type}
                    stock={jewelryItem.stock}
                    id={jewelryItem.id}
                    image={jewelryItem.image}
                
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
      
    </div>
  );
}
export default Jewelry;
