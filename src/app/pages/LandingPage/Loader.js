import Loader from "../../misc/Loader";
import { DEFAULT_COLOR } from "../../misc/__colors__";


const MainLoader = () => {
  return (
    <div id="" className="my-80">
      <div className="">
        <Loader small={false} width="2rem" height="2rem" color={ DEFAULT_COLOR } />
      </div>
    </div>
  );
};

export default MainLoader;
