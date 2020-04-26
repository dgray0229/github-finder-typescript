import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

// Here we are creating an interface to define our state
interface UsersProps {
    users: {
        login: string,
        id: number,
        avatar_url: string,
        html_url: string,
    }[],
    loading?: boolean,
}

const Users = ({ users, loading }:UsersProps) => {
    // If we don't create a constructor, JavaScript will initialize by default what it needs for a basic class, such as error methods
    return loading ? 
    (<Spinner />) : 
    (
        <div id="users" style={userStyle}>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}

export default Users