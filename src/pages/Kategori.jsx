import React from "react";
import education from "../assets/education.png";
import building from "../assets/building.png";
import health from "../assets/health.png";
import ribbon from "../assets/ribbon.png";
import {
  CardBerita,
  CardCategory,
  CardWakaf,
} from "../components/Cards/CustomCard";
import { PaginationCard } from "../components/Pagination/Pagination";
import Typography from "../components/Typography/Typography";
const Kategori = () => {
  return (
    <>
      <section className="pt-[8rem] pb-[5rem] ">
        <div className=" container">
          <div className=" md:flex justify-center pb-7">
            <Typography
              className="md:leading-[55px]"
              type="bold"
              variant="h2"
              color="navy"
            >
              Pilihan Kategori Wakaf
            </Typography>
          </div>
          <div className="grid grid-cols-4  place-items-center">
            <CardCategory text="Wakaf Pendidikan" icon={education} />
            <CardCategory text="Wakaf Bangunan" icon={building} />
            <CardCategory text="Wakaf Pendidikan" icon={health} />
            <CardCategory text="Wakaf Bangunan" icon={ribbon} />
          </div>
        </div>
      </section>
      <section className="bg-[#FBFBFB] py-[4rem]">
        <div className=" container">
          <div className="md:flex pb-7 ">
            <Typography variant="h3" type="bold" color="navy">
              Program Wakaf Pendidikan
            </Typography>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <CardWakaf />
            <CardWakaf />
            <CardWakaf />
            <CardWakaf />
            <CardWakaf />
            <CardWakaf />
          </div>
        </div>
        <div className="container pt-14 flex justify-end">
          <PaginationCard />
        </div>
      </section>
    </>
  );
};

export default Kategori;
