import {SETTING} from "../constants/reducerConstants";
import AuthReducer from "./auth";

const SettingReducer = (state, action) => {
    switch (action.type) {
        case SETTING:
            return {
                ...state,
                posts: action.payload
            };
    }
};

SettingReducer.initialState = {
    appName: 'Second Hand Market',
    error: null
}

export default SettingReducer;
