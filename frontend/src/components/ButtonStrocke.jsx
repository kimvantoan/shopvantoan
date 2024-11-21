import React from "react";

const ButtonStrocke = ({ title, type = "", onClick = "" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="text-#5A6D57 border-2 border-#5A6D57 px-6 py-2"
    >
      {title}
    </button>
  );
};

export default ButtonStrocke;
