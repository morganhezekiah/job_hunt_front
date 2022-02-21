import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../misc/Button";
import Input from "../../misc/Input";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import ErrorText from "../../misc/ErrorText";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import LoginUserDispatcher, {
  resetLoginStoreState,
} from "../../store/dispatchers/Auth/Login";
import { GET_USER_TOKEN } from "../../misc/helpers/authTokenManager";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const AppLoading = useSelector((state) => state.AppLoadingReducer.loading);
  const LoginReducer = useSelector((state) => state.LoginReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ seePassword, setSeePassword ] = useState(false);


  // useEffect(async ()=>{
  //   const token = await GET_USER_TOKEN();
  //   token !== null && token.length > 1 && navigate("/users/dashboard");
  // }, []);

  useEffect(() => {
    const fetchUserToken = async () => {
      const token =  await GET_USER_TOKEN();
      token !== null && token.length > 1 && navigate("/users/dashboard");
    }

    fetchUserToken()
  },[navigate])

  useEffect(() => {
    if (LoginReducer.message.length > 0) {
      LoginReducer.error
        ? toast.error(LoginReducer.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        : toast.success(LoginReducer.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

      if (!LoginReducer.error) {
        dispatch(resetLoginStoreState());
        navigate("/users/dashboard");
      }
    }
  }, [LoginReducer.error, LoginReducer.message, dispatch, navigate]);

  const handleUserLoginRequest = async (e) => {
    e.preventDefault();

    email.length < 1?setEmailError("Please enter your email"):setEmailError("");
    

    password.length < 1?setPasswordError("Please enter your Password"):setPasswordError("");

    password.length > 0 && email.length > 0 && (await dispatch(LoginUserDispatcher({ email, password })));
  };

  return (
    <Wrapper title="LOGIN TO YOUR ACCOUNT">
      <form onSubmit={handleUserLoginRequest}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={"Email"}
        />
        <ErrorText text={emailError} />
        <Input
          value={password}
          secured={ !seePassword }
          seePasswordRequest = {()=>setSeePassword(!seePassword)}
          onChange={(e) => setPassword(e.target.value)}
          label={"Password"}
        />
        <ErrorText text={passwordError} />
        <Button
          disabled={AppLoading}
          onClick={handleUserLoginRequest}
          title="Login"
        />
      </form>

      <div style={{ padding: 4 }}>
        <Link
          to="/users/register"
          style={{ fontSize: "13px", color: "#666af6" }}
        >
          I dont have an account?
        </Link>

        <Link
          to="/users/forgot-password"
          style={{ fontSize: "13px", color: "#666af6", float: "right" }}
        >
          I forgot my password?
        </Link>
      </div>
    </Wrapper>
  );
};

export default Login;
