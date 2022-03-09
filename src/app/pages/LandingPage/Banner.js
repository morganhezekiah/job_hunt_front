import Logo from "../../assets/images/job hunt.png";



const Banner = ()=>{
    return (
        <div
        className="main-banner  "
        id="top"

      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text "
                    
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>OWERRI JOB HUNT</h6>
                        <h2>Over 2000 local and international jobs open for grabs!</h2>
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
                          <a href="/users/register"  className="primary">Register As Student</a>
                        </div>

                        <div className="border-first-button scroll-to-section ml-2">
                          <a  href="/companies/register"  className="secondary" >Register As Business</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image"
                 
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