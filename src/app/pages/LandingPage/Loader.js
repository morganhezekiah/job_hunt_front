import Loader from "../../misc/Loader";


const MainLoader = () => {
  return (
    <div id="js-preloader" className="js-preloader">
      <div className="preloader-inner">
        <Loader />
      </div>
    </div>
  );
};

export default MainLoader;
