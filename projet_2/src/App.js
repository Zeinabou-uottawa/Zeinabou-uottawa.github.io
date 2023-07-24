import './App.css';
import Navbar from "./Navbar"
import Jewelry from "./jewelry"
import Home from "./Home"
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import MaintenanceTips from './MaintenanceTips';
import Confirmation from './confirmation';

import 'bootstrap/dist/css/bootstrap.min.css';
import FORM_STATE from './FORM_STATE';
import Contact from './ContactUs';

import MaintenanceFr from './MaintenanceFr';


function App (){
  



  return (
    <Router>
      <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/jewelry" component={Jewelry} />
      <Route exact path="/contact-us" component={Contact} />
      <Route exact path="/maintenance-tips" component={MaintenanceTips} />
      <Route path="/form-state" component={FORM_STATE} />
      <Route exact path="/confirmation" component={Confirmation} />
      <Route exact path="/maintenancefr" component={MaintenanceFr} />
    </Switch>
    </Router>
  );
};


export default App;