import { combineReducers } from "redux";
import LoginReducer from "./Auth/Login";
import RegisterReducer from "./Auth/Register";
import AppLoadingReducer from "./Utils/AppLoading";
import EmailActivationReducer from "./Auth/UserEmailValidation";



const reducers = combineReducers({
    LoginReducer,
    RegisterReducer,
    AppLoadingReducer,
    EmailActivationReducer
});


export default reducers;