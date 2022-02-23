import { REGISTER_ERROR, REGISTER_SUCCESS } from "../../Actions/Auth/Register";
import requestParamsParser from "../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../misc/helpers/Backend";

let URL = `${BACKEND_DOMAIN}users/register`;

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
    .then((data) => {
      if (ERROR) {
        dispatch({
          type: REGISTER_ERROR,
          payload: { message: data.message },
        });
      } else {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { message: data.message, user: data.data.user },
        });
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: REGISTER_ERROR,
        payload: { message: err.message },
      });
    });
};

export default LoginUserDispatcher;

