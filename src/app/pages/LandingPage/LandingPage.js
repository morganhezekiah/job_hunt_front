import Portfolio from "./Portfolio";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Banner from "./Banner";
import TopNav from "./TopNav";
import Contact from "./Contact";
import Footer from "./Footer";
import Loader from "./Loader";
import FreeQuote from "./FreeQuote";

const LandingPage = () => {
  // const [ numberOfReload, setNumberOfReload ] = useState(0);
  // useEffect(()=>{
  //   if()
  // })
  // useEffect(()=>{
  //   window.location.reload();
  // }, []);
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
