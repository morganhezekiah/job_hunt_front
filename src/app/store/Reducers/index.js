import { combineReducers } from "redux";
import LoginReducer from "./Auth/Login";
import RegisterReducer from "./Auth/Register";
import RegisterCompanyReducer from "./Auth/Company/Register";
import LoginCompanyReducer from "./Auth/Company/Login";
import GetCompanyFromSlug from "./Auth/Company/GetCompanyFromSlug";
import AppLoadingReducer from "./Utils/AppLoading";
import EmailActivationReducer from "./Auth/UserEmailValidation";
import GetTopicsReducer from "./Topics/GetTopics";
import GetUserFromSlug from "./Auth/GetUserFromSlug";
import AddTopicResourceReducer from "./Topics/AddTopicResource";
import UpdateCompanyPlan from "./Auth/Company/UpdateCompanyPlan";

const reducers = combineReducers({
    LoginReducer,
    RegisterReducer,
    AppLoadingReducer,
    EmailActivationReducer,
    GetTopicsReducer,
    GetUserFromSlug,
    AddTopicResourceReducer,
    RegisterCompanyReducer,
    LoginCompanyReducer,
    GetCompanyFromSlug,
    UpdateCompanyPlan
});


export default reducers;