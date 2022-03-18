import upskill from '../../assets/images/upskill-network.png';
import Tv from '../../assets/images/upskill-Tv.png';
import Harriet from '../../assets/images/Harriet.png';
const FreeQuote = () => {
  return (
    <>
      <div id="free-quote" className="free-quote">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div
                className="section-heading"
                
              >
                <h6>Join our sponsors</h6>
                <h4>Grow With Us Now</h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div
              className="col-lg-8 offset-lg-2"
            
            >
              <form id="search" action="#" method="GET">
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
                      />
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
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <fieldset>
                      <button type="submit" className="main-button  font-semibold">
                        <a className="text-xl">Join Now</a>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col mx-auto bg-gray-900'>
        <h1 className="text-center text-3xl font-semiibold text-white mt-6">Meet Owerri job hunts Sponsors</h1>
        <div className='flex mx-auto'>
          <img className="w-40 h-28 mx-4" src={Tv} alt=""/>
          <img className="w-40 h-28 mx-4"   src={upskill} alt=""/>
          <img className="w-36 h-28 mt-6 mx-4"  src={Harriet} alt=""/>
        </div>
     </div>
    </>
  );
};

export default FreeQuote;