import React, { useState, useContext } from 'react';
import GithubContext, { GithubContextInterface} from '../../context/github/githubContext';
import AlertContext, { AlertContextInterface } from '../../context/alert/alertContext';

const Search: React.SFC = () =>  {
    const githubContext: GithubContextInterface  = useContext(GithubContext);
    const alertContext: AlertContextInterface = useContext(AlertContext);
    const { users, searchUsers, clearUsers } = githubContext;
    const { showAlert } = alertContext;
    const [query, setQuery] = useState('')

    // Here we define our handleChange() as a special React Type
    const handleChange = (event: React.FormEvent<HTMLInputElement>):void => {
        // Based on whatever input handleChange is running on, we can grab the name and value from the currentTarget
        // We destructure both of those values here
            // event.target vs event.curentTarget
            // Basically, events bubble by default so the difference between the two is:
                // target is the element that triggered the event (e.g., the user clicked on) 
                // currentTarget is the element that the event listener is attached to. - currentTarget is the element that listenes to the event
        const { value } = event.currentTarget
        // When we need to set the state, we dynamically define the key of setState to be the value of the [name] property
        // We then set that property to the value of event.currentTarget.value
        setQuery(value)
    }

    // We use arrow functions here to avoid having to bind the value of `this` to our methods, 
    // because function methods create a new scope of `this`
    const onSubmit = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        if (!query || query === '') {
            showAlert!("Please enter something", "light");
        } else {
            searchUsers!(query)
            setQuery('')
        }
    }

    return (
        <div id="search">
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="query" id="query" placeholder="Search Users..." value={query} onChange={handleChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {users.length > 0 && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
        </div>
    )
}

export default Search