import requestParamsParser from "../../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../../misc/helpers/Backend";
import {
    LOGIN_COMPANY_ERROR,
    LOGIN_COMPANY_SUCCESS,
    RESET_COMPANY_LOGIN,
} from "../../../Actions/Auth/Company/Login";
import { SAVE_COMPANY_SLUG } from "../../../../misc/helpers/authTokenManager";

let URL = `${BACKEND_DOMAIN}companies/login`;

let ERROR = false;

const RegisterCompanyDispatcher = (data) => async (dispatch) => {
    dispatch(AppLoadingDispatcher(true));

    let params = requestParamsParser("POST", null, data);
    await fetch(URL, params)
        .then((res) => {
            dispatch(AppLoadingDispatcher(false));
            if (res.status > 299) {
                ERROR = true;
            } else {
                ERROR = false;
            }
            return res.json();
        })
        .then(async (data) => {
            if (ERROR) {
                dispatch({
                    type: LOGIN_COMPANY_ERROR,
                    payload: { message: data.message },
                });
            } else {

                await SAVE_COMPANY_SLUG(data.data.company.company_slug);
                dispatch({
                    type: LOGIN_COMPANY_SUCCESS,
                    payload: { message: data.message, user: data.data.user },
                });
            }
        })
        .catch((err) => {
            dispatch(AppLoadingDispatcher(false));
            dispatch({
                type: LOGIN_COMPANY_ERROR,
                payload: { message: err.message },
            });
        });
};

export const resetLoginCompanyStoreState = () => (dispatch) => {
    dispatch({ type: RESET_COMPANY_LOGIN });
};

export default RegisterCompanyDispatcher;
