
import './App.css';
import Navbar from "./Navbar"
import Home from "./Home"
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import MaintenanceTips from './MaintenanceTips';
import ContactUs from './ContactUs';


function App (){
  return (
    <Router>
      <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/contact-us" component={ContactUs} />
      <Route exact path="/maintenance-tips" component={MaintenanceTips} />
    </Switch>
    </Router>
  );
};


export default App;
