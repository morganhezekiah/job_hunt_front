import React, { useEffect } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useSelector, useDispatch } from "react-redux";
import UpdateUserPlanDispatcher from "../../store/dispatchers/Auth/UserCompletePayment";
import { toast } from "react-toastify";


const WhenUserHasntPaid = () => {
  const dispatch = useDispatch();
  const GetUserFromSlug = useSelector((state) => state.GetUserFromSlug);
  const UpdateUserPlan = useSelector(state => state.UpdateUserPlan );
  const GetUserFromSlugState = useSelector((state) => state.GetUserFromSlug);




  const config = () => ({
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLICKEY,
    tx_ref: Date.now(),
    amount: 5000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: GetUserFromSlug.user.email,
      phonenumber: GetUserFromSlug.user.mobile_contact,
      name: GetUserFromSlug.user.full_name,
    },
    customizations: {
      title: "USER REGISTERATION",
      description: "Payment for job hunt plan",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  });
  useEffect(()=>{
    console.log(GetUserFromSlug.user)
  }, [GetUserFromSlugState]);



  const HandleFlutterPayment = useFlutterwave(config());

  const ContinuePaymentCompletion = (response) => {
    dispatch(UpdateUserPlanDispatcher());
      if(response.status === "successful"){
        toast.error("Payment was Successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
      }else{
        toast.error("Error Completing your payment, window will reload in 5s", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
              window.location.reload();
          }, 5000);
      }
  };

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
      <div className="border-first-button scroll-to-section">
        <a
          to="/users/candidate/pricing"
          className="primary"
          onClick={(e) => {
            e.preventDefault();
            HandleFlutterPayment({
              callback: (response) => {
                ContinuePaymentCompletion(response);
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            });
          }}
        >
          <i class="fa fa-money" aria-hidden="true"></i> &nbsp; Complete Payment
          Registeration
        </a>
      </div>
    </div>
  );
};

export default WhenUserHasntPaid;
