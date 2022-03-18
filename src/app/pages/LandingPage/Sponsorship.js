import React, { useState, useEffect } from "react";
import upskill from "../../assets/images/upskill-network.png";
import Tv from "../../assets/images/upskill-Tv.png";
import Harriet from "../../assets/images/Harriet.png";
import { useSelector, useDispatch } from "react-redux";
import AddSponsorShipDispatcher, {
  resetSponsorshipState,
} from "../../store/dispatchers/Service/Sponsorship";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorText from "../../misc/ErrorText";
import Loader from "../../misc/Loader";

const Sponsorship = () => {
  const SponsorshipReducer = useSelector((state) => state.SponsorshipReducer);
  const dispatch = useDispatch();
  const AppLoading = useSelector((state) => state.AppLoadingReducer.loading);

  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState("");
  const [websiteError, setWebsiteError] = useState("");

  useEffect(() => {
    if (SponsorshipReducer.message.length > 0) {
      SponsorshipReducer.error
        ? toast.error(SponsorshipReducer.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        : toast.success(SponsorshipReducer.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

      if (!SponsorshipReducer.error) {
        setEmail("");
        setWebsite("");
        dispatch(resetSponsorshipState());
      }
    }
  }, [SponsorshipReducer.error, SponsorshipReducer.message]);

  const handleSubmitSponsorshipForm = async (e) => {
    e.preventDefault();

    email.length < 1
      ? setEmailError("Please enter your email")
      : setEmailError("");

    website.length < 1
      ? setWebsiteError("Please enter your Password")
      : setWebsiteError("");

    if (website.length > 0 && email.length > 0) {
      dispatch(dispatch(AddSponsorShipDispatcher({ email, website })));
    }
  };

  return (
    <>
      <div id="free-quote" className="free-quote">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading">
                <h6>Join our sponsors</h6>
                <h4>Grow With Us Now</h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-2">
              <form
                id="search"
                action="#"
                onSubmit={handleSubmitSponsorshipForm}
              >
                <div className="row">
                  <div className="col-lg-4 col-sm-4">
                    <fieldset>
                      <input
                        type="web"
                        name="web"
                        className="website"
                        placeholder="Your website URL..."
                        reautocomplete="on"
                        required
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                      <ErrorText text={websiteError} />
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <fieldset>
                      <input
                        type="address"
                        name="address"
                        className="email"
                        placeholder="Email Address..."
                        reautocomplete="on"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <ErrorText text={emailError} />
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <fieldset>
                      <button
                        type="submit"
                        style={{
                          pointerEvents: AppLoading ? "none" : "all",
                          opacity: AppLoading ? 0.5 : 1,
                        }}
                        className="main-button  font-semibold"
                      >
                        <a className="text-xl">
                          {AppLoading ? (
                            <Loader
                              small
                              width="1rem"
                              height="1rem"
                              color="#fff"
                            />
                          ) : (
                            "Join Now"
                          )}
                        </a>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto bg-gray-900">
        <h1 className="text-center text-3xl font-semiibold text-white mt-6">
          Meet Owerri job hunts Sponsors
        </h1>
        <div className="flex mx-auto">
          <img className="w-40 h-28 mx-4" src={Tv} alt="" />
          <img className="w-40 h-28 mx-4" src={upskill} alt="" />
          <img className="w-36 h-28 mt-6 mx-4" src={Harriet} alt="" />
        </div>
      </div>
    </>
  );
};

export default Sponsorship;
