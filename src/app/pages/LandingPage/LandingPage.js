import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Banner from "./Banner";
import TopNav from "./TopNav";
import Contact from "./Contact";
import Footer from "./Footer";
import Loader from "./Loader";
import FreeQuote from "./FreeQuote";
import UseDocumentTitle from "../../hooks/UseDocumentTitle";
// import Portfolio from "./Portfolio";
// import Blogs from "./Blogs";

const LandingPage = () => {
  UseDocumentTitle("Owerri Job Hunt-Langing Page")
 
  return (
    <>
      {/* <!-- ***** Preloader Start ***** --> */}
      <Loader />
      {/* <!-- ***** Preloader End ***** -->

  <!-- Pre-header Starts --> */}
      <TopNav />
      {/* <!-- Pre-header End -->

  <!-- ***** Header Area Start ***** --> */}
      <Header />
      {/* <!-- ***** Header Area End ***** --> */}

      {/* BANNER */}

      <Banner />

      {/* ABOUT US */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* FREE QUOTE */}
      <FreeQuote />

      {/* <Portfolio />
      <Blogs /> */}

      {/* CONTACT US */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default LandingPage;
