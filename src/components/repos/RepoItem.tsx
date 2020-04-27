import React from 'react'

interface RepoItemProps {
    repo: {
        id: string,
        html_url: string,
        name: string,
    }
}

const RepoItem: React.SFC<RepoItemProps> = ( {repo: {html_url, name}} : RepoItemProps) => {
    return (
        <div className="card">
            <h3>
                <a href={html_url} target="_blank" rel="noopener noreferrer" >{name}</a>
            </h3>
        </div>
    )
}

export default RepoItem
