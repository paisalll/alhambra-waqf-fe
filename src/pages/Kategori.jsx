import React from "react";
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";
import education from "../assets/education.png";
import building from "../assets/building.png";
import health from "../assets/health.png";
import ribbon from "../assets/ribbon.png";
import { CardBerita, CardCategory, CardWakaf } from "../components/CustomCard";
const Kategori = () => {
  return (
    <Layout>
      <section className="pt-[8rem] pb-[5rem] ">
        <div className=" container">
          <div className=" md:flex justify-center pb-7">
            <h1 className="text-5xl  text-TitleText font-bold md:leading-[55px]">
              Pilihan Kategori Wakaf
            </h1>
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
            <h1 className="text-3xl font-bold text-TitleText">
              Program Wakaf Pendidikan
            </h1>
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
      </section>
    </Layout>
  );
};

export default Kategori;
