import React, { useContext } from 'react'
import AlertContext, { AlertContextInterface } from '../../context/alert/alertContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const Alert: React.FunctionComponent = (): ReturnType<any> => {
    const alertContext: AlertContextInterface = useContext(AlertContext);
    const { message, type } = alertContext;
    return ((message && type) && (
        <div className={`alert alert-${type}`}>
            <FontAwesomeIcon icon={faInfoCircle} /> {message}
        </div>
    ))
}



export default Alert