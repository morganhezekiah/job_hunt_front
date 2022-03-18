import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactUsDispatcher, {
  resetContactUsState,
} from "../../store/dispatchers/Service/ContactUs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorText from "../../misc/ErrorText";
import Loader from "../../misc/Loader";

const Contact = () => {
  const ContactUsReducer = useSelector((state) => state.ContactUsReducer);
  const dispatch = useDispatch();
  const AppLoading = useSelector((state) => state.AppLoadingReducer.loading);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    if (ContactUsReducer.message.length > 0) {
      ContactUsReducer.error
        ? toast.error(ContactUsReducer.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        : toast.success(ContactUsReducer.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

      if (!ContactUsReducer.error) {
        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
        dispatch(resetContactUsState());
      }
    }
  }, [ContactUsReducer.error, ContactUsReducer.message]);

  const handleContactUsRequest = async (e) => {
    e.preventDefault();

    email.length < 1
      ? setEmailError("Please enter your email")
      : setEmailError("");

    name.length < 1
      ? setNameError("Please enter your Password")
      : setNameError("");

    subject.length < 1
      ? setSubjectError("Please enter your Password")
      : setSubjectError("");

    message.length < 1
      ? setMessageError("Please enter your Password")
      : setMessageError("");

    if (
      name.length > 0 &&
      email.length > 0 &&
      subject.length > 0 &&
      message.length > 0
    ) {
      
      dispatch(
        dispatch(ContactUsDispatcher({ name, subject, message, email }))
      );
    }
  };

  return (
    <div id="contact" className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h6>Contact Us</h6>
              <h4>
                Get In Touch With Us For More <em>Inquiries</em>
              </h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div className="col-lg-12">
            <form id="contact" action="" onSubmit={handleContactUsRequest}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="contact-dec">
                    <img src="assets/images/contact-dec-v2.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div id="map">
                    {/* <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="636px" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="fill-form">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src="assets/images/phone-icon.png" alt="" />
                            <a href="#">+234 (0) 915 762 3156</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src="assets/images/email-icon.png" alt="" />
                            <a href="#">Owerrijobhunt@gmail.com</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src="assets/images/location-icon.png" alt="" />
                            <a href="#">
                              15 Ajoku street behind UBA Bank wetheral road,
                              Owerri, imo State
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 placeholder:font-bold">
                        <fieldset>
                          <input
                            type="name"
                            name="name"
                            className="placeholder:font-bold"
                            id="name"
                            placeholder="Name"
                            reautocomplete="on"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <ErrorText text={nameError} />
                        </fieldset>
                        <fieldset>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="placeholder:font-bold"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="Your Email"
                            required=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <ErrorText text={emailError} />
                        </fieldset>
                        <fieldset>
                          <input
                            type="subject"
                            name="subject"
                            id="subject"
                            className="placeholder:font-bold"
                            placeholder="Subject"
                            reautocomplete="on"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                          <ErrorText text={subjectError} />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <textarea
                            name="message"
                            type="text"
                            className="form-control placeholder:font-bold"
                            id="message"
                            placeholder="Message"
                            required=""
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                          <ErrorText text={messageError} />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button "
                            style={{
                              pointerEvents: AppLoading ? "none" : "all",
                              opacity: AppLoading ? 0.5 : 1,
                            }}
                          >
                            {AppLoading ? (
                              <Loader
                                small
                                width="1rem"
                                height="1rem"
                                color="#fff"
                              />
                            ) : (
                              "Send Message Now"
                            )}
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
