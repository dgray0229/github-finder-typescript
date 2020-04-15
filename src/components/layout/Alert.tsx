import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


interface AlertProps {
    alert: {
        message?: string, 
        type?: string,
    } | null
}


const Alert: React.FunctionComponent<AlertProps> = ( { alert } : AlertProps ): any => {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <FontAwesomeIcon icon={faInfoCircle} /> {alert.message}
            </div>
        )
    )
}



export default Alert