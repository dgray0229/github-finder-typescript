import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext, { UserContext } from '../../context/github/githubContext'

// Here we are creating an interface to define our state

const Users: React.SFC = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;
    // If we don't create a constructor, JavaScript will initialize by default what it needs for a basic class, such as error methods
    return loading ? 
    (<Spinner />) : 
    (
        <div id="users" style={userStyle}>
            {users.map((user: UserContext) => (
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