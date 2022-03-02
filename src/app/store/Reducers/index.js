import { combineReducers } from "redux";
import LoginReducer from "./Auth/Login";
import RegisterReducer from "./Auth/Register";
import AppLoadingReducer from "./Utils/AppLoading";
import EmailActivationReducer from "./Auth/UserEmailValidation";
import GetTopicsReducer from "./Topics/GetTopics";
import GetUserFromSlug from "./Auth/GetUserFromSlug";
import AddTopicResourceReducer from "./Topics/AddTopicResource";


const reducers = combineReducers({
    LoginReducer,
    RegisterReducer,
    AppLoadingReducer,
    EmailActivationReducer,
    GetTopicsReducer,
    GetUserFromSlug,
    AddTopicResourceReducer
});


export default reducers;