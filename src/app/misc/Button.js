import React from "react";

const Button = ({ title, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md py-2 px-8 lg:mt-8 mt-4 text-sm font-semibold text-white flex mx-auto "
      style={{ backgroundColor: "#666AF6",pointerEvents:disabled ? "none":"all", opacity:disabled ? 0.6:1 }}
    >
      {title}
    </button>
  );
};

export default Button;
