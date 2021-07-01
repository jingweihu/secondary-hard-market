import {LOGIN} from "../constants/reducerConstants";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
        let value = {
            ...state,
            auth: action.payload
        };
        console.log(value);

        return value;
    }
};

AuthReducer.initialState = {
    currentUser: null,
    error: null
}

export default AuthReducer;