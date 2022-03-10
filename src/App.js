import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import Pokemon from './components/Pokemon';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/pokemon' exact component={Pokemon} />
      </Switch>
    </div>
    </Router>

  );
}

export default App;
