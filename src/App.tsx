import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

// Interfaces allow you to have multiple merged declarations, but a type alias for an objec ttype literal cannot
// Unlike an interface, the type alias can also be used for other types such as primitives, unions, and tuples



// In typescript, the class-based component expects two types:
// The first type parameter being used for props being passed in,
// The second paramater being types for state
// If only one parameter is being passed in, it defaults to the props being passed in
// class App extends Component<InterfaceProps, InterfaceState>
const App: React.SFC = () => {
  return (
    <GithubState>
      <AlertState>
      <Router>
        <div id="app" className="app" data-testid="app">
          <header className="app-header">
            <Navbar title="Github Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </header>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
