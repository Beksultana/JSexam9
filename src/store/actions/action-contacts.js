import axios from '../../axios-contacts';

import {CONTACTS_ERROR, CONTACTS_REQUEST, CONTACTS_SUCCESS} from "./actionsType";

export const contactRequest = () => ({type: CONTACTS_REQUEST});
export const contactSuccess = contacts => ({type: CONTACTS_SUCCESS, contacts});
export const contactError = () => ({type: CONTACTS_ERROR});


export const getContacts = () => {
    return dispatch => {
        dispatch(contactRequest());

        axios.get('contacts.json').then(response => {
            dispatch(contactSuccess(response.data),
                error => dispatch(contactError()))
        })
    }
};