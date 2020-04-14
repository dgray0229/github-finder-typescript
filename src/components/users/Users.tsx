import React, { Component } from 'react'
import UserItem from './UserItem'

// Here we are creating an interface to define our state
interface IState {
    users: {
        login: string,
        id: number,
        avatar_url: string,
        html_url: string,
    }[]
}

export default class Users extends Component<{},IState> {
    // If we don't create a constructor, JavaScript will initialize by default what it needs for a basic class, such as error methods
    state = {
        users: [
            {
                login: "mojombo",
                id: 1,
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
            },
            {
                login: "defunkt",
                id: 2,
                avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                "html_url": "https://github.com/defunkt",
            },
            {
                login: "pjhyett",
                id: 3,
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                html_url: "https://github.com/pjhyett",
            }
    
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}