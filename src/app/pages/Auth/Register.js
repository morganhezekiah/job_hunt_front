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
import UserResendActivationEmail from "../../store/dispatchers/Auth/UserResendAccountActivationEmail";
import { Oval, Bars } from "react-loader-spinner";
import Loader from "../../misc/Loader";

 


const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const RegisterReducer = useSelector((state) => state.RegisterReducer);
  const AppLoading = useSelector((state) => state.AppLoadingReducer.loading);
  const UserResendActivationEmailData = useSelector(
    (state) => state.ResendUserAccountActivation
  );

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPaswordConfirmError] = useState("");

  const [registeratonSuccess, setRegisteratonStatus] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const token = await GET_USER_SLUG();
      token !== null && token.length > 1 && navigate("/users/dashboard");
    }
    fetchData();
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

      !RegisterReducer.error && setRegisteratonStatus(true);
    }
  }, [RegisterReducer.error, RegisterReducer.message, navigate]);

  useEffect(() => {
    if (UserResendActivationEmailData.message.length > 0) {
      UserResendActivationEmailData.error
        ? toast.error(UserResendActivationEmailData.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        : toast.success(UserResendActivationEmailData.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    }
  }, [UserResendActivationEmailData]);

  const handleUserRegisterRequest = async (e) => {
    e.preventDefault();

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

    passwordConfirmation.length > 0 &&
      password.length > 0 &&
      email.length > 0 &&
      fullName.length > 0 &&
      dispatch(RegisterUserDispatcher({ email, password, fullName, age: 18 }));
  };

  const handleRequestEmailResend = async (e) => {
    e.preventDefault();
    await dispatch(UserResendActivationEmail());
  };

  return (
    <Wrapper
      title={
        registeratonSuccess
          ? "Account Created Successfully"
          : "REGISTER FOR AN ONLINE CLASS"
      }
    >
      {registeratonSuccess ? (
        <div style={{ position: "relative", paddingBottom: "10px" }}>
          <div class="notification success">
            Success! Your Acccount was created successfully, please check your
            email to continue.If you could not find your email on the mails
            folder, check your spam folder too.
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                opacity: AppLoading ? "0.5" : "1",
                pointerEvents: AppLoading ? "none" : "all",
              }}
              className="border-first-button scroll-to-section"
              onClick={handleRequestEmailResend}
            >
              <a
                href="#"
                className="primary"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                Resend Activaion Email?
              </a>
            </div>
          </div>
        </div>
      ) : (
        <>
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
              title={ AppLoading  ? <Loader small width="1rem" height="1rem" color="#fff" />: "Register"}
              disabled={AppLoading }
              onClick={handleUserRegisterRequest}
            />
          </form>

          <div style={{ padding: 4 }}>
            <Link
              to="/users/login"
              style={{ fontSize: "13px", color: DEFAULT_COLOR }}
            >
              I already have an account?
            </Link>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Register;
