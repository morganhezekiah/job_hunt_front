import { SAVE_USER_SLUG } from "../../../misc/helpers/authTokenManager";
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  RESET_LOGIN,
} from "../../Actions/Auth/Login";
import requestParamsParser from "../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../misc/helpers/Backend";

let URL = `${BACKEND_DOMAIN}users/login`;

let ERROR = false;

const LoginUserDispatcher = (data) => async (dispatch) => {
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
    .then( async (data) => {
      if (ERROR) {
        dispatch({
          type: LOGIN_ERROR,
          payload: { message: data.message },
        });
      } else {
        await SAVE_USER_SLUG(data.data.user.slug);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { message: data.message, user: data.data.user },
        });
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: LOGIN_ERROR,
        payload: { message: err.message },
      });
    });
};

export const resetLoginStoreState = () => (dispatch) => {
  dispatch({ type: RESET_LOGIN });
};
export default LoginUserDispatcher;
