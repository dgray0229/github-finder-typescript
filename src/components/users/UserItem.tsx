import React, { Component } from 'react'

type UserItemProps = {
    key: number,
    user: {
        login: string,
        id: number,
        avatar_url: string,
        html_url: string,    
    }
}

export default class UserItem extends Component<UserItemProps> {
    // We don't need a constructor to define our state, but it's common with class based components
    // A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.
    constructor(props: UserItemProps) {
        super(props);
    }

    /**
     * We can also just define state outside of the constructor
     * state = {key: value}
     * We would still use this.state to get the values in our render() method
     * I will leave the constructor to show how to pass types to props in typescript
     */
    render() {
        // Destructuring
        const {login, avatar_url, html_url} = this.props.user
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{
                    width: '60px'
                }}/>
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        )
    }
}
