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

export const UserItem = ({user}: UserItemProps) => {
    // Since this component doesn't have state, we've refactored this component to be a functional component
    // It seems typescript requires parentheses around arguments, even if there is only one, so that the type definitions work.
    // Since we only need the user from props, we destructure it inside our parameter
    // Then we destructure our user parameters into their own variables
    const {login, avatar_url, html_url} = user
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

export default UserItem;