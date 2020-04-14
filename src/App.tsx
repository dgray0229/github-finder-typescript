import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem'
import './App.css';


class App extends Component<{}> {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar title="Github Finder"  />
          <UserItem />
        </header>
      </div>
    );

  }
}

export default App;
