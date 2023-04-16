import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Typography from "../Typography/Typography";
const CardBeritaWakaf = ({ key, title, body, picture, updated_at, id_news }) => {
  return (
    <div className="flex">
      <div className="w-[40%]">
        <img src={picture} className="object-cover rounded-3xl w-full h-[14rem]" alt="Foto Wakaf" />
      </div>
      <div className="pl-9 w-[60%] flex flex-col justify-between">
        <div>
          <Link to={`/berita-wakaf/${id_news}`} className="no-underline">
            <Typography className="pb-1" color="navy" type="medium" variant="h3">
              {title}
            </Typography>
          </Link>

          <Typography className="pt-2" type="body3" color="neutral-80">
            {updated_at}
          </Typography>
          <Typography
            className="leading-snug pt-4 multiline-ellipsis-three "
            variant="body3"
            color="neutral-90"
          >
            {body}
          </Typography>
        </div>
        <div className="flex justify-end">
          <Typography
            className="pt-4 cursor-pointer items-center flex"
            color="btnColor"
            variant="body3"
          >
            Baca Selengkapnya
            <IoIosArrowRoundForward size={30} className="pl-1" />
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default CardBeritaWakaf;
