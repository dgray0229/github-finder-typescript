import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import './App.css';

// Interfaces allow you to have multiple merged declarations, but a type alias for an objec ttype literal cannot
// Unlike an interface, the type alias can also be used for other types such as primitives, unions, and tuples

type Repo = {
  id: string,
  html_url: string,
  name: string,
}

type Alert = {
  message?: string,
  type?: string,
}

interface AppState {
  users: {}[],
  user: {} | null,
  repos: Array<Repo>,
  loading: boolean,
  alert: Alert
}




// In typescript, the class-based component expects two types:
// The first type parameter being used for props being passed in,
// The second paramater being types for state
// If only one parameter is being passed in, it defaults to the props being passed in
// class App extends Component<InterfaceProps, InterfaceState>
class App extends Component<{}, AppState> {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: {},
    repos: [],
  }


  async componentDidMount(): Promise<void> {
    // This will call our getUsers method
    await this.getUsers()
  }
  handleError = (error: Error) => {
      const { message } = error
      console.error(error);
      this.setAlert(message, "danger")
      this.setState({ loading: false })

  }

  // The getUsers() method sends an axios request, which is a Promise
  // Since the function doesn't return a value, but rather updates the state
  // The function type would be Promise<void>
  // Adding this type is optional
  // if this was a normal async function(){} the async goes before the function call
  getUsers = async (): Promise<void> => {
    this.setState({ loading: true });
    try {
      let response = await axios.get(`https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
      if (response) {
        let { data } = response;
        this.setState({users: data, loading: false })
      }
    } catch (error) {
      this.handleError(error)
    }
  }

  // Search Github Users
  searchUsers = async (query: string): Promise<void> => {
    try {
      this.setState({ loading: true });
      let response = await axios.get(`https://api.github.com/search/users?q=${query}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
      let { items } = response.data;
      this.setState({ users: items, loading: false });
    } catch (error) {
      this.handleError(error)
    }
  }

  // Get a Single Github User
  getUser = async (login: string): Promise<void> => {
    this.setState({ loading: true });
    try {
      let response = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
      if (response) {
        let { data } = response
        this.setState({ user: data, loading: false });
      }
    } catch (error) {
      this.handleError(error)
    }
  }

  // Get User's Repos
  getUserRepos = async (login: string): Promise<void> => {
    const [reposPerPage, sortBy, direction]: Array<string> = ['5', 'created', 'asc']
    try {
      this.setState({ loading: true });
      let response = await axios.get(`https://api.github.com/users/${login}/repos?per_page=${reposPerPage}&sort=${sortBy}:${direction}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
      if (response) {
        let { data } = response
        this.setState({ repos: data, loading: false });
      }
    } catch (error) {
      this.handleError(error)
    }
  }


  // Clear Users from State
  clearUsers = (): void => this.setState({ users: [], loading: false });

  // Set Alert
  setAlert = (message: string, type: string): void => {
    const alert = { message, type }
    this.setState({ alert })
    setTimeout(() => this.setState({ alert: {} }), 5000)
  };

  render() {
    const { alert, users, user, repos, loading } = this.state;
    return (
      <Router>
        <div id="app" className="app" data-testid="app">
          <header className="app-header">
            <Navbar title="Github Finder" />
            <div className="container">
              {Object.keys(alert).length !== 0 && <Alert {...alert} />}
              <Switch>
                <Route exact path="/" render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' render={props => (
                  // We want to pass in any additional props passed to this route with { ...props }
                  // Then we define props specific to our User component.
                  <User {...props} getUser={this.getUser} getUserRepos={this.getUserRepos} user={user} repos={repos} loading={loading} />
                )} />
              </Switch>
            </div>
          </header>
        </div>
      </Router>
    );

  }
}

export default App;
