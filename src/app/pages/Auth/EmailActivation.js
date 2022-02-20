import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmailValidationDispatcher, { resetEmailActivationStoreState } from "../../store/dispatchers/Auth/EmailValidation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";







const EmailActivation = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const EmailValidationReducer = useSelector(state =>state.EmailActivationReducer);


  useEffect(() => {
    token && dispatch(EmailValidationDispatcher(token));
  }, []);

  useEffect(() => {
    if (EmailValidationReducer.message.length > 0) {

      EmailValidationReducer.error
        ? toast.error(EmailValidationReducer.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        : toast.success(EmailValidationReducer.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

      if (!EmailValidationReducer.error) {
        dispatch(resetEmailActivationStoreState());
        navigate("/users/login");
      }
    }
  }, [EmailValidationReducer.message]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Oval height="100" width="100" color="#666AF6" ariaLabel="loading" />
    </div>
  );
};

export default EmailActivation;