import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import './App.css';


class App extends Component<{}> {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar title="Github Finder"  />
          <div className="container">
            <Users />
          </div>
        </header>
      </div>
    );

  }
}

export default App;
