import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

// Interfaces allow you to have multiple merged declarations, but a type alias for an objec ttype literal cannot
// Unlike an interface, the type alias can also be used for other types such as primitives, unions, and tuples
interface AppState {
  users: {}[],
  loading: boolean,
}

// In typescript, the class-based component expects two types:
  // The first type parameter being used for props being passed in,
  // The second paramater being types for state
  // If only one parameter is being passed in, it defaults to the props being passed in
  // class App extends Component<InterfaceProps, InterfaceState>
class App extends Component<{}, AppState> {
  state = {
    users: [],
    loading: false,
  }

  componentDidMount(): void {
    // This will call our getUsers method
    this.getUsers()
  }

  // The getUsers() method sends an axios request, which is a Promise
  // Since the function doesn't return a value, but rather updates the state
  // The function type would be Promise<void>
  // Adding this type is optional
  getUsers = async ():Promise<void> => {
    this.setState({loading: true});
    let response = await axios.get(`https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
    let { data } = response
    this.setState({users: data, loading: false})
    console.log(data);

  }
  
  render() {
    const {loading, users} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <Navbar title="Github Finder"  />
          <div className="container">
            <Users loading={loading} users={users} />
          </div>
        </header>
      </div>
    );

  }
}

export default App;
