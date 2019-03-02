import {ADD_NEW_CONTACTS} from "../actions/actionsType";

const initialState = {
    contacts: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_CONTACTS:
            return {
                ...state,
            };
        default:
            return state;
    }

};

export default reducer;