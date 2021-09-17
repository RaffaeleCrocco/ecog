import Dashboard from './pages/Dashboard';
import Documentation from './pages/Documentation';
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact render={() => <Dashboard/>}/>
        <Route path="/documentation" render={() => <Documentation/>}/>      
      </Router>
    </div>
  );
}


export default App;
