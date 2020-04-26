import React, { Component } from 'react'

interface SearchState {
    query: string,
}

interface SearchProps {
    searchUsers: (query: string) => void,
    clearUsers: () => void,
    showClear: boolean,
    setAlert: ( message: string, type: string ) => void
}

export default class Search extends Component<SearchProps, SearchState> {
    state = {
        query: ''
    }

    // Here we define our handleChange() as a special React Type
    handleChange = (event: React.FormEvent<HTMLInputElement>):void => {
        // Based on whatever input handleChange is running on, we can grab the name and value from the currentTarget
        // We destructure both of those values here
            // event.target vs event.curentTarget
            // Basically, events bubble by default so the difference between the two is:
                // target is the element that triggered the event (e.g., the user clicked on) - target is the element that triggered the event
                // currentTarget is the element that the event listener is attached to. - currentTarget is the element that listenes to the event
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
        event.preventDefault();
        if (!this.state.query || this.state.query === '') {
            this.props.setAlert("Please enter something", "light");
        } else {
            this.props.searchUsers(this.state.query)
            this.setState({query: ''})
        }
    }

    render() {
        const { clearUsers, showClear } = this.props;

        return (
            <div id="search">
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="query" id="query" placeholder="Search Users..." value={this.state.query} onChange={this.handleChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            </div>
        )
    }
}
