import React from "react";
import { CardSimples } from "./Styled";
import Typography from "../Typography/Typography";
const CardIcon = ({ icon, text, jumlah }) => {
  return (
    <CardSimples
      bg="white"
      height="11rem"
      width="12rem"
      br="12px"
      className="flex items-center justify-center shadow-custom"
    >
      <div className="flex justify-center">
        <img src={icon} alt="icon" className="" />
      </div>

      <div className="text-center pt-4">
        <Typography variant="h5" color="primary-90">
          {jumlah}
        </Typography>
        <Typography className=" md:text-base" variant="h5" type="normal" color="text02">
          {text}
        </Typography>
      </div>
    </CardSimples>
  );
};

export default CardIcon;
