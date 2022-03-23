import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserResendActivationEmail from "../../store/dispatchers/Auth/UserResendAccountActivationEmail";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../misc/Button";
import Loader from "../../misc/Loader";

const UserAccountCreatedConfirmation = () => {
  const AppLoading = useSelector((state) => state.AppLoadingReducer.loading);
  const UserResendActivationEmailData = useSelector(
    (state) => state.ResendUserAccountActivation
  );
  const dispatch = useDispatch();

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

  const handleRequestEmailResend = async (e) => {
    e.preventDefault();
    await dispatch(UserResendActivationEmail());
  };

  return (
    <div style={{ position: "relative", paddingBottom: "10px" }}>
      <div class="notification success">
        Success! Your Acccount was created successfully, please check your email
        to continue.If you could not find your email on the mails folder, check
        your spam folder too.
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
          <Button
            title={
              AppLoading ? (
                <Loader small width="1rem" height="1rem" color="#fff" />
              ) : (
                "Resend Activation Email?"
              )
            }
            disabled={AppLoading}
            onClick={ handleRequestEmailResend }
          />
        </div>
      </div>
    </div>
  );
};

export default UserAccountCreatedConfirmation;
