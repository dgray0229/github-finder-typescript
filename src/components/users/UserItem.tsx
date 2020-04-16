import React from 'react'
import { Link } from "react-router-dom";

type UserItemProps = {
    key: number,
    user: {
        login: string,
        id: number,
        avatar_url: string,
        html_url?: string,    
    }
}

// Since this component will only render data from props, we are marking this type as Readonly<Type>
// This may change with future functionality added.
export const UserItem = ({user: {login, avatar_url}}: Readonly<UserItemProps>) => {
    // Since this component doesn't have state, we've refactored this component to be a functional component
    // It seems typescript requires parentheses around arguments, even if there is only one, so that the type definitions work.
    // Since we only need the user from props, we destructure it inside our parameter
    // Then we destructure our user parameters into their own variables
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{
                width: '60px'
            }}/>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1" rel="noopener noreferrer">More</Link>
            </div>
        </div>
    )
    
}

export default UserItem;