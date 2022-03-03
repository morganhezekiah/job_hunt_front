const FreeQuote = () => {
  return (
    <div id="free-quote" className="free-quote">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div
              className="section-heading"
              
            >
              <h6>Get Your Free Quote</h6>
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
                    <button type="submit" className="main-button">
                      Get Quote Now
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeQuote;