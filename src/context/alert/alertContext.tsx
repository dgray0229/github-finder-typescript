import { createContext } from 'react';
type Alert = {
    message?: string,
    type?: string,
}
  
type AlertMethods = {
    showAlert: (message: string, type: string) => void
}

export interface AlertContextInterface extends Alert, Partial<AlertMethods> {};


const defaultContext = {
    message: '',
    type: '',
}

const alertContext = createContext<AlertContextInterface>(defaultContext);

export default alertContext;
export const AlertContextProvider =  alertContext.Provider;
export const AlertContextConsumer =  alertContext.Consumer;