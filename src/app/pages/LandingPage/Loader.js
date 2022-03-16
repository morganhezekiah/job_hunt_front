import Loader from "../../misc/Loader";
import { DEFAULT_COLOR } from "../../misc/__colors__";


const MainLoader = () => {
  return (
    <div id="js-preloader" className="js-preloader">
      <div className="preloader-inner">
        <Loader small={false} width="2rem" height="2rem" color={ DEFAULT_COLOR } />
      </div>
    </div>
  );
};

export default MainLoader;
