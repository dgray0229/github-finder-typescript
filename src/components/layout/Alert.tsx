import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


interface AlertProps {
    alert?: {
        message?: string | null,
        type?: string | null,
    } | null 
}

const Alert = ( { alert: { message, type } }: AlertProps ): JSX.Element => {
    return (
        alert !== null && (
            <div className={`alert alert-${type}`}>
                <FontAwesomeIcon icon={faInfoCircle} /> {message}
            </div>
        )
    )
}

Alert.defaultProps = {
    // We assert that this property is non-null below with our '!' non-null assertion operator
    message: "Please enter something",
    type: "light"
};


export default Alert