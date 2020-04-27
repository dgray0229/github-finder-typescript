import React from 'react'
import RepoItem from './RepoItem'

type Repo = {
    id: string,
    html_url: string,
    name: string,
}


interface ReposProps {
    repos: Array<Repo>
}


const Repos: React.SFC<ReposProps> = ( {repos} : ReposProps): any => {
    return repos.map((repo: Repo) => <RepoItem repo={repo} key={repo.id} />)
}

export default Repos
