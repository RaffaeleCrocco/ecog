import Dashboard from './pages/Dashboard';
import Documentation from './pages/Documentation';
import {Route, BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss'

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Route path="/" exact render={() => <Dashboard/>}/>
        <Route path="/documentation" render={() => <Documentation/>}/>      
      </Router>
    </div>
  );
}


export default App;
