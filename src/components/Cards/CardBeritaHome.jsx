import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Typography from "../Typography/Typography";
const CardBeritaHome = ({ key, title, body, picture }) => {
  return (
    <div className="flex">
      <div className="basis-2/5 h-[9rem] md:h-[9rem] ">
        <img src={picture} className="object-cover rounded-xl img-card " alt="Foto Wakaf" />
      </div>
      <div className="basis-3/5 px-4 flex flex-col justify-around">
        <Typography color="navy" type="medium">
          {title}
        </Typography>
        <Typography
          className="leading-snug multiline-ellipsis"
          color="neutral-90"
          type="normal"
          variant="body3"
        >
          {body}
        </Typography>
        <Typography className="cursor-pointer items-center flex" color="btnColor" variant="body3">
          Baca Selengkapnya
          <IoIosArrowRoundForward size={30} className="pl-2" />
        </Typography>
      </div>
    </div>
  );
};

export default CardBeritaHome;
