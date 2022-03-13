import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../misc/Button";
import Input from "../../misc/Input";
import Wrapper from "./Wrapper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ErrorText from "../../misc/ErrorText";
import { useDispatch, useSelector } from "react-redux";
import RegisterUserDispatcher from "../../store/dispatchers/Auth/Register";
import { GET_USER_SLUG } from "../../misc/helpers/authTokenManager";
import { DEFAULT_COLOR } from "../../misc/__colors__";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const RegisterReducer = useSelector((state) => state.RegisterReducer);
  const AppLoading = useSelector((state) => state.AppLoadingReducer.loading);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPaswordConfirmError] = useState("");


  useEffect(() => {
    async function fetchData(){
      const token = await GET_USER_SLUG();
      token !== null && token.length > 1 && navigate("/users/dashboard");
    }
    fetchData()
  }, [navigate]);

  useEffect(() => {
    if (RegisterReducer.message.length > 0) {
      RegisterReducer.error
        ? toast.error(RegisterReducer.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        : toast.success(RegisterReducer.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

      !RegisterReducer.error && navigate("/users/login");
    }
  }, [RegisterReducer.error, RegisterReducer.message, navigate]);

  const handleUserRegisterRequest = async (e) => {
    e.preventDefault();

    //TODO: note the last IF statement here resets the error;

    fullName.length < 1
      ? setFullNameError("Please enter your Full Name")
      : setFullNameError("");

    email.length < 1
      ? setEmailError("Please enter your email")
      : setEmailError("");

    password.length < 1
      ? setPasswordError("Please enter your Password")
      : setPasswordError("");

    passwordConfirmation.length < 1
      ? setPaswordConfirmError("Please enter your Password")
      : setPaswordConfirmError("");

    passwordConfirmation !== password
      ? setPaswordConfirmError("Password and its confirmation are not same")
      : setPaswordConfirmError("");


      console.log(password);

    passwordConfirmation.length > 0 && password.length > 0 && email.length > 0 && fullName.length > 0 && dispatch(RegisterUserDispatcher({ email, password, fullName, age: 18 }));
  };

  return (
    <Wrapper title="REGISTER FOR AN ONLINE CLASS">
      <form onSubmit={handleUserRegisterRequest}>
        <Input
          onChange={(e) => setFullName(e.target.value)}
          label={"USERNAME"}
        />
        <ErrorText text={fullNameError} />

        <Input onChange={(e) => setEmail(e.target.value)} label={"EMAIL"} />
        <ErrorText text={emailError} />

        <Input
          onChange={(e) => setPassword(e.target.value)}
          label={"PASSWORD"}
          secured={true}
        />
        <ErrorText text={passwordError} />

        <Input
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          label={"CONFIRM PASSWORD"}
          secured={true}
        />
        <ErrorText text={passwordConfirmError} />

        <Button
          title="REGISTER"
          disabled={AppLoading}
          onClick={handleUserRegisterRequest}
        />
      </form>

      <div style={{ padding: 4 }}>
        <Link to="/users/login" style={{ fontSize: "13px", color: DEFAULT_COLOR }}>
          I already have an account?
        </Link>
      </div>
    </Wrapper>
  );
};

export default Register;
