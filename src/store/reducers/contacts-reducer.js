import {CONTACTS_SUCCESS} from "../actions/actionsType";

const initialState = {
    contacts: {},
    modal: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACTS_SUCCESS:
            return {
                ...state,
              contacts: action.contacts
            };
        default:
            return state;
    }

};

export default reducer;