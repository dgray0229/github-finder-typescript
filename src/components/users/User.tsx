import React, { useEffect, Fragment } from 'react'
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link, RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

type Repo = {
    id: string,
    html_url: string,
    name: string,
}

type Params = {
    login: string
}
  

interface UserProps extends RouteComponentProps<Params> {
    getUser: (login: string) => Promise<void>,
    getUserRepos: (login: string) => Promise<void>,
    user: { 
        name?: string, 
        avatar_url?: string, 
        location?: string, 
        bio?: string, 
        blog?: string,
        company?: string,
        login?: string, 
        html_url?: string, 
        followers?: string, 
        following?: string, 
        public_repos?: string, 
        public_gists?: string, 
        hireable?: string,
    },
    repos: Array<Repo>,
    loading: boolean,
}

// We pass in props as a param in functional component, so we can destructure our props as we're passing them in
const User: React.SFC<UserProps> = ({ getUser, getUserRepos, user, repos, loading, match }: UserProps) =>  {
    useEffect( () => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // The second parameter for useEffect is a dependency list
        // To avoid useEffect running continuously, we need to tell it when to change,
        // We could tell it to run only when a prop like 'repos' changes, 
        // But to mimic componentDidMount, we just leave an empty array.
        // Also, to disable any warnings about how we have an empty dependencies list, we can use the comment:
        // eslint-disable-next-line
    }, [])
    // We get an endless loop sometimes because the dependencies that we pass into useEffect will be called
        // If we pass in getUser as a dependency, that will trigger a render,
        // When a render is triggered, useEffect will be called
        // when UseEffect is called, it will call getUser... and the cycle repeats itself 


    const { name, avatar_url, location, bio, blog, company, login, html_url, followers, following, public_repos, public_gists, hireable } = user
    if (loading) return <Spinner />
    return (
        <Fragment>
            <Link to="/" className="btn btn-light">
                Back To Search
            </Link>
            Hireable: {' '}
            {hireable ? <FontAwesomeIcon icon={faCheck} className="text-success" /> : <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt={name} className="round-img" style={{width: '150px'}} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark my-1" target="_blank" rel="noopener noreferrer" >Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username: </strong>  <a href={html_url} target="_blank" rel="noopener noreferrer">{login}</a>
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company: </strong> {company}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website: </strong> <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a> 
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-white">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    )
}

export default User