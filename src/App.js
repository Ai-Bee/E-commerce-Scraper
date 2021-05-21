// import logo from './logo.svg';
import Landing from './landing'
import ProductsPage from './products'
import './stylesheets/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Landing />
      </Route>
      <Route path="/products">
        <ProductsPage/> 
      </Route> 
      </Router>
    </div>
  );
}

export default App;
