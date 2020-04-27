import React, { useState, useEffect, Fragment } from 'react';
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

type User = {
  login: string,
  id: number,
  avatar_url: string,
  html_url: string,
}

type Users = User[] | [] 


// In typescript, the class-based component expects two types:
// The first type parameter being used for props being passed in,
// The second paramater being types for state
// If only one parameter is being passed in, it defaults to the props being passed in
// class App extends Component<InterfaceProps, InterfaceState>
const App: React.SFC = () => {
  const [users, setUsers] = useState<Users | []>([])
  const [user, setUser] = useState<User | {}>({})
  const [loading, setLoading] = useState<boolean>(false)
  const [alert, setAlert] = useState<Alert | {}>({})
  const [repos, setRepos] = useState<Repo[] | []>([])

  const handleError = (error: Error) => {
        const { message } = error
        console.error(error);
        setAlert(message)
        setLoading(false)

  }

  // The getUsers() method sends an axios request, which is a Promise
  // Since the function doesn't return a value, but rather updates the state
  // The function type would be Promise<void>
  // Adding this type is optional
  // if this was a normal async function(){} the async goes before the function call
  const getUsers = async (): Promise<void> => {
    setLoading(true)
    try {
      let response = await axios.get(`https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
      if (response) {
        let { data } = response;
        setUsers(data)
        setLoading(false)
      }
    } catch (error) {
      handleError(error)
    }
  }

  // Search Github Users
  const searchUsers = async (query: string): Promise<void> => {
    try {
      setLoading(true)
      let response = await axios.get(`https://api.github.com/search/users?q=${query}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
      let { items } = response.data;
      setUsers(items)
      setLoading(false)

    } catch (error) {
      handleError(error)
    }
  }

  // Get a Single Github User
  const getUser = async (login: string): Promise<void> => {
    setLoading(true)
    try {
      let response = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
      if (response) {
        let { data } = response
        setUser(data)
        setLoading(false)

      }
    } catch (error) {
      handleError(error)
    }
  }

  // Get User's Repos
  const getUserRepos = async (login: string): Promise<void> => {
    const [reposPerPage, sortBy, direction]: Array<string> = ['5', 'created', 'asc']
    try {
      setLoading(true)
      let response = await axios.get(`https://api.github.com/users/${login}/repos?per_page=${reposPerPage}&sort=${sortBy}:${direction}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
      if (response) {
        let { data } = response
        setRepos(data)
        setLoading(false)

      }
    } catch (error) {
      handleError(error)
    }
  }


  // Clear Users from State
  const clearUsers = (): void => {        
    setUsers([])
    setLoading(false)
  };

  // Set Alert
  const showAlert = (message: string, type: string): void => {
    setAlert({message, type})
    setTimeout(() => setAlert({}), 5000);
  };
  useEffect( () => {
      getUsers();
      // eslint-disable-next-line
  }, [])

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
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length ? true : false}
                    showAlert={showAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                // We want to pass in any additional props passed to this route with { ...props }
                // Then we define props specific to our User component.
                <User {...props} getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} loading={loading} />
              )} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
