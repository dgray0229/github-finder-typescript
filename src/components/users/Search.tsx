import React, { Component } from 'react'

interface SearchState {
    query: string,
}

interface SearchProps {
    searchUsers: (query: string) => void,
    clearUsers: () => void,
    showClear: boolean,
}

export default class Search extends Component<SearchProps, SearchState> {
    state = {
        query: ''
    }

    // Here we define our handleChange() as a special React Type
    handleChange = (event: React.FormEvent<HTMLInputElement>):void => {
        // Based on whatever input handleChange is running on, we can grab the name and value from the currentTarget
        // We destructure both of those values here
        const { name, value } = event.currentTarget
        // When we need to set the state, we dynamically define the key of setState to be the value of the [name] property
        // We then set that property to the value of event.currentTarget.value
        // Because typescript doesn't recognize [name] as a parameter, we use `Pick` to ensure that we're setting a key that has been defined in our interface
        // We tell the Pick command that our [name] value is in SearchState as a key
        this.setState({[name]: value} as Pick<SearchState, keyof SearchState>)
    }

    // We use arrow functions here to avoid having to bind the value of `this` to our methods, 
    // because function methods create a new scope of `this`
    onSubmit = (event: React.SyntheticEvent<EventTarget>) => {
        if (this.state.query === '') return null // TODO: Will be an alert 
        event.preventDefault();
        this.props.searchUsers(this.state.query)
        this.setState({query: ''})
    }

    render() {
        const { clearUsers, showClear } = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="query" id="search" placeholder="Search Users..." value={this.state.query} onChange={this.handleChange} required />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            </div>
        )
    }
}
