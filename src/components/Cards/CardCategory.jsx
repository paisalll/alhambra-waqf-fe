import React from "react";
import Typography from "../Typography/Typography";
import { CardSimples } from "./Styled";

const CardCategory = ({ text, icon, onClick }) => {
  return (
    <CardSimples
      bg="white"
      height="11rem"
      width="12rem"
      br="12px"
      className="flex items-center justify-center shadow-custom"
    >
      <div className="items-center flex justify-center">
        <img src={icon} className="w-[3.5rem] h-[3.5rem] p-2 rounded-full bg-primary-90" />
      </div>
      <div className="text-center pt-5">
        <Typography className=" md:text-base" variant="h5" type="medium" color="navy">
          {text}
        </Typography>
      </div>
    </CardSimples>
  );
};

export default CardCategory;
