import '../styles/App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Jesus Urueta Modificacion del componenete app con los router de reac-rrouter-dom

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
