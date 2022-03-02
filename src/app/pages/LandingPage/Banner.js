import Logo from "../../assets/images/job hunt.png";



const Banner = ()=>{
    return (
        <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>OWERRI JOB HUNT</h6>
                        <h2>We Help You Land That Dream Job.</h2>
                        <p>
                          This template is brought to you by OwerriJobHunt
                          website. Feel free to use this for a commercial
                          purpose. You are not allowed to redistribute the
                          template ZIP file on any other template website. Thank
                          you.
                        </p>
                      </div>
                      <div className="col-lg-12 flex">
                        <div className="border-first-button scroll-to-section">
                          <a href="https://bit.ly/owerrijobhunt" target="__blank" className="primary">Register As Student</a>
                        </div>

                        <div className="border-first-button scroll-to-section ml-2">
                          <a  href="https://bit.ly/owerritalenthunt" target="__blank" className="secondary" >Register As Business</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={Logo} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Banner;