import React from "react";

const ButtonFill = ({ title, type = "", onClick = "" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="text-white bg-#5A6D57 hover:bg-#404E3E px-6 py-2"
    >
      {title}
    </button>
  );
};

export default ButtonFill;
