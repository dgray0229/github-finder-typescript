import { SET_ALERT, REMOVE_ALERT, AppReducerActions } from '../types';
import { AlertContextInterface } from './alertContext';

export default(state: AlertContextInterface, action: AppReducerActions) => {
    switch(action.type) {
        case SET_ALERT:
            return action.payload;
        case REMOVE_ALERT:
            return {
                ...state,
                message: '',
                type: '',
            };
        default:
            return state;
    }
}