import React from "react";
import { Oval, Bars } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { DEFAULT_COLOR } from "./__colors__";

const Loader = ({ width, height }) => {
  return (
    <div style={{ width:"100%",display:"flex",marginTop:"40px", height:"100%", justifyContent:"center", alignItems:"center"}}>
      <Bars height={ height } width={ width } color={ DEFAULT_COLOR } ariaLabel="loading" />
    </div>
  );
};

export default Loader;
