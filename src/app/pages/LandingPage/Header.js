import Banner from "../../misc/Banner";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* <!-- ***** Logo Start ***** --> */}
              <a href="index.html" className="logo">
                <Banner />
              </a>
              {/* <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** --> */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#about">About</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#services">Services</a>
                </li>
                
                <li className="scroll-to-section">
                  <a href="#contact">Contact</a>
                </li>
                {/* <li className="scroll-to-section">
                  <div className="border-first-button">
                    <Link to="/users/register" href="#contact" className="primary">
                      Register now
                    </Link>
                  </div>
                </li> */}
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* <!-- ***** Menu End ***** --> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
