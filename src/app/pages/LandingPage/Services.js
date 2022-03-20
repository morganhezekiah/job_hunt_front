import man1 from '../../assets/images/man1.jpeg';
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <h1 className="text-center font-semibold text-4xl mt-4">How to Apply</h1>
              <h2 className="text-center font-semibold text-3xl mb-10 mt-4">Get Started</h2>
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
                    <h6>How to apply</h6>
                    <h4>
                      Register as a Candidate
                    </h4>
                    <div className="line-dec"></div>
                  </div>
                  <p className="text-black font-normal text-xl">
                    Over 2000 local and internation jobs available for Grabs{" "}
                  </p>
                  <button className="mr-2  text-xs">
                    <Link to="/users/register"  className="bg-green-500 py-3 px-6 rounded-full text-white text-xs md:text-sm ">Register As Student</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <h1 className="text-center font-semibold text-4xl mt-4 ">How to Apply</h1>
              <h2 className="text-center font-semibold text-3xl mb-10 mt-4">Get Started</h2>
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
                    <h6 className="text-indigo-500">How to apply</h6>
                    <h4>
                      Register as a Buisness
                    </h4>
                    <div className="line-dec"></div>
                  </div>
                  <p className="text-black font-normal text-xl">
                    Join other smart Buisness to discover and hire Digital Talents from Owerri's best talent pool{" "}
                  </p>
                  <button className="mr-2  text-xs">
                    <Link to="/users/companies"  className="bg-indigo-500 text-white py-3 px-6 rounded-full text-white text-xs md:text-sm ">Register As Buisness</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};


export default Services;