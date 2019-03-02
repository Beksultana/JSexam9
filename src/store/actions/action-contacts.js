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
export const deleteContacts = id => {
    return dispatch => {
        dispatch(contactRequest());
        axios.delete('contacts/' + id + '.json').then(() =>
        dispatch(getContacts()))
    }
};

export const editContacts = (id ,item) => {
    return dispatch => {
        dispatch(contactRequest());
        axios.put(`contacts.json${id}`, item).then(response => {
            console.log(response);})
    }
};