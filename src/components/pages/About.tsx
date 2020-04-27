import React, { Fragment } from 'react'

const About: React.SFC = () => {
    return (
        <Fragment>
            <h1 data-testid="about">About This App</h1>
            <p>App to search Github users</p>
            <p>Version 1.0.0</p>
        </Fragment>
    )
}

export default About