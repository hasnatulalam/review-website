import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route,  } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import About from './components/About/About';
import Home from './components/Home';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
    <div>
    
          <Navbar></Navbar>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/service">
          <Service />
        </Route>
       
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route  exact path="/home">
          <Home />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
