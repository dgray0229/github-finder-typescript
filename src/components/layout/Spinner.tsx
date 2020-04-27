import React, { Fragment } from 'react'
import Loading from './spinner.gif'

const Spinner: React.SFC = () => (
    <Fragment>
        <img src={Loading} alt="Loading..." style={{width: '200px', margin: 'auto', display: 'block'}} />
    </Fragment>
)

export default Spinner