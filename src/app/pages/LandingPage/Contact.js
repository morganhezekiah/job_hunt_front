const Contact = () => {
  return (
    <div id="contact" className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div
              className="section-heading"
              
            >
              <h6>Contact Us</h6>
              <h4>
                Get In Touch With Us For More <em>Inquiries</em>
              </h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div
            className="col-lg-12"
            
          >
            <form id="contact" action="" method="post">
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
                            <a href="#">15 Ajoku street behind UBA Bank wetheral road, Owerri, imo State</a>
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
                          />
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
                          />
                        </fieldset>
                        <fieldset>
                          <input
                            type="subject"
                            name="subject"
                            id="subject"
                            className="placeholder:font-bold"
                            placeholder="Subject"
                            reautocomplete="on"
                          />
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
                          ></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button "
                          >
                            Send Message Now
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