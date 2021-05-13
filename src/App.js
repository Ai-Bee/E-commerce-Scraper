// import logo from './logo.svg';
import Landing from './landing'
import ProductsPage from './products'
import './stylesheets/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
      <Route path="/home">
        <Landing />
      </Route>
      <Route path="/products">
        <ProductsPage/> 
      </Route> 
        <small className='credit'>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></small>
      </Router>
    </div>
  );
}

export default App;
