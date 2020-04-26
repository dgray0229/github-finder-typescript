import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


interface AlertProps {
    message?: string, 
    type?: string,
}


const Alert: React.FunctionComponent<AlertProps> = ( { message, type } : AlertProps ): ReturnType<any> => {
    return (
        <div className={`alert alert-${type}`}>
            <FontAwesomeIcon icon={faInfoCircle} /> {message}
        </div>
    )
}



export default Alert