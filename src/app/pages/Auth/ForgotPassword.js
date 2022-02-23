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

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const AppLoading = useSelector((state) => state.AppLoadingReducer.loading);
  const LoginReducer = useSelector((state) => state.LoginReducer);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");


  useEffect(async ()=>{
    const token = await GET_USER_TOKEN();
    token !== null && token.length > 1 && navigate("/users/dashboard");
  }, []);

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
  }, [LoginReducer.message]);

  const handleUserLoginRequest = async (e) => {
    e.preventDefault();

    email.length < 1?setEmailError("Please enter your email"):setEmailError("");

  };

  return (
    <Wrapper title="Forgot Password.">
      <form onSubmit={handleUserLoginRequest}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={"Enter Your Email"}
        />
        <ErrorText text={emailError} />
        <Button
          disabled={AppLoading}
          onClick={handleUserLoginRequest}
          title="Continue"
        />
      </form>

      <div style={{ padding: 4 }}>
        <Link
          to="/"
          style={{ fontSize: "13px", color: "#666af6" }}
        >
          I think I remembered?
        </Link>
      </div>
    </Wrapper>
  );
};

export default ForgotPassword;
