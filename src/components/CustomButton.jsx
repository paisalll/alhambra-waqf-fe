import React from "react";

const CustomButton = ({ id, label, onClick, color, disabled }) => {
  const btn_color = {
    Primary: "bg-BtnColor py-2 px-4 md:py-2 md:px-6 lg:py-3 lg:px-6 ",
    Biru: "bg-task py-1 px-3 md:py-2 md:px-4 text-blue-600 text-[8px] md:text-[10px]",
  };
  const colorClassname = btn_color[color || "Primary"];

  return (
    <button
      className={
        ` text-white rounded-[8px] font-normal text-sm 
       ` + colorClassname
      }
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default CustomButton;
