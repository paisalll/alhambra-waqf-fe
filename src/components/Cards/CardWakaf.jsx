import React from "react";
import { Progress } from "antd";
import { Link } from "react-router-dom";
import { CardSimples } from "./Styled";
import "../Cards/Card.scss";
import CustomButton from "../Button";
import Typography from "../Typography/Typography";
const CardWakaf = ({ img, category, collected, fundTarget, title, due_date, id }) => {
  return (
    <CardSimples
      className="capitalize shadow-custom"
      bg="white"
      height="auto"
      width="19rem"
      br="12px"
    >
      <img
        src={img}
        className="object-cover rounded-xl h-[10rem] md:h-[12rem] w-full"
        alt="Foto Wakaf"
      />
      <div className="pt-3">
        <Typography className="pb-1" color="btnColor" type="medium" variant="body3">
          {category}
        </Typography>
        <Link to={`/kategori-wakaf/${id}`} preventScrollReset={true} className="no-underline">
          <Typography
            className="leading-snug cursor-pointer multiline-ellipsis"
            type="semibold"
            color="navy"
            variant="body3"
          >
            {title}
          </Typography>
        </Link>
      </div>
      <div className="pt-3">
        <div className="flex justify-between">
          <Typography color="primary-90" type="normal" variant="body3">
            {collected}
          </Typography>
          <Typography color="primary-60" type="normal" variant="body3">
            Rp.{fundTarget}
          </Typography>
        </div>
        <Progress percent={30} strokeColor={"#3862A5"} showInfo={false} />
        <div className="flex justify-between">
          <Typography color="neutral-90" type="normal" variant="body3">
            Terkumpul
          </Typography>
          <Typography color="neutral-90" type="normal" variant="body3">
            {due_date} Hari Lagi
          </Typography>
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <CustomButton label="Wakaf Sekarang" color="Primary" />
      </div>
    </CardSimples>
  );
};

export default CardWakaf;
