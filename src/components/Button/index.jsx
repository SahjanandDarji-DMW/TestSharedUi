import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button style={{ padding: "10px", backgroundColor: "orange" }}>
        {title}
      </button>
    </div>
  );
};

export default Button;
