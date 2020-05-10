import React, { useContext, useEffect } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext, { UserContext } from '../../context/github/githubContext'

const Users: React.SFC = () => {
    const githubContext = useContext(GithubContext);

    const { getUsers, loading, users } = githubContext;
    // eslint-disable-next-line no-console
    useEffect(() => {getUsers!()}, [])
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