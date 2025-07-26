import React, { useState } from "react";

const ButtonWithModal = ({ title, onclick }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    onClick?.();
    setOpen(true);
  };

  return (
    <div>
      <button
        style={{
          padding: "10px",
          textAlign: "center",
          backgroundColor: "orange",
        }}
        onClick={onclick}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonWithModal;
