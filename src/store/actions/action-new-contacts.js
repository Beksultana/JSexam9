import axios from '../../axios-contacts';
import {CONTACTS_ERROR, CONTACTS_REQUEST, CONTACTS_SUCCESS} from "./actionsType";

export const newContactsRequest = () => ({type: CONTACTS_REQUEST});
export const newContactsSuccess = () => ({type: CONTACTS_SUCCESS});
export const newContactsError = () => ({type: CONTACTS_ERROR});

export const addContacts = (contacts) => {
    return dispatch => {
        dispatch(newContactsRequest());
        axios.post('contacts.json' , contacts).then(
            error => dispatch(newContactsError()))
    }
};