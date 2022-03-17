import man1 from '../../assets/images/man1.jpeg';
const About = () => {
  return (
    <div id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-left-image "
                
                >
                  <img src={man1} alt="" />
                </div>
              </div>
              <div
                className="col-lg-6 align-self-center   "
                
              >
                <div className="about-right-content">
                  <div className="section-heading">
                    <h6>About Us</h6>
                    <h4>
                      This project is brought to you by Upskill Network
                    </h4>
                    <div className="line-dec"></div>
                  </div>
                  <p className="text-black font-normal">
                  Upskill Network is a team of digital skill experts facilitating digital transformation across Nigeria through inclusive digital literacy training programs, business incubation and support, consulting and partnerships with government agencies and other institutions. 
                  Our objective is to help the younger generation take off on the right path, empower them to solve real problems, create access to better opportunities within their immediate environment and in the world, and tune into the global technology and digital space which has since dominated the global agenda in other to secure a better future and compete effectively with their peers across the world.{" "}
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item first-skill-item"
                        
                      >
                        <div className="progress" data-percentage="90">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                              90%
                              <h6 className="text-sm mx-2 mt-4">Jobs Available</h6>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item second-skill-item "
                        
                      >
                        <div className="progress" data-percentage="80">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                              80%
                              <h6 className="text-sm mx-2 mt-4">Businessess Registered</h6>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item third-skill-item "
                        
                      >
                        <div className="progress" data-percentage="80">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                            80%
                              <h6 className="text-sm mx-2 mt-4">Candidate Registered</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;