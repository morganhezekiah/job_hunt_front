import React, { useState } from "react";

const Input = ({ label, onChange, value, secured, seePasswordRequest }) => {
  const [securedState, setSecuredState] = useState(secured);
  return (
    <div className=" flex flex-col ">
      <label className="text-black ml-5  mt-1 text-xs">{label}</label>
      {secured ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            style={{ width: "100%", flex: "3", backgroundColor: "#E8EEF3" }}
            type={securedState ? "password" : "text"}
            value={value}
            onChange={onChange}
            className=" p-2 my-2 mx-5 rounded-sm text-black outline-none"
          />
          <div style={{ paddingRight: "3" }} onClick={()=>setSecuredState(!securedState)}>
            see
          </div>
        </div>
      ) : (
        <input
          style={{ backgroundColor: "#E8EEF3" }}
          type={secured ? "password" : "text"}
          value={value}
          onChange={onChange}
          className=" p-2 my-2 mx-5 rounded-sm text-black outline-none"
        />
      )}
    </div>
  );
};

export default Input;
