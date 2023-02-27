import { useState } from "react";
import education from "../assets/education.png";
import building from "../assets/building.png";
import health from "../assets/health.png";
import ribbon from "../assets/ribbon.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CarouselMitra } from "../components/Carousel/Carousel";
import {
  CardBerita,
  CardCategory,
  CardWakaf,
} from "../components/Cards/CustomCard";
import CustomButton from "../components/Button/CustomButton";
import Player from "../components/Player";
import Typography from "../components/Typography/Typography";
function Home() {
  return (
    <>
      <section className="bg-whiteBg pt-[8rem] pb-[5rem] ">
        <div className=" container">
          <div className=" md:flex ">
            <div className="md:w-[42%] ">
              <Typography variant="h2" type="bold" color="primary-90">
                Mari Berlomba dan Ayo Berwakaf ya
              </Typography>
              <Typography className="py-8 " variant="body3" color="neutral-90">
                Berbagi kepada sesama memberi jiwa rasa damai. Berbagi dengan
                tulus tanpa pamrih memberikan perasaan suka cita. ayo berwakaf
                bersama kami
              </Typography>
              <CustomButton color="Primary" label="Mulai Berwakaf" />
            </div>
            <div className="md:w-[58%] flex justify-end order ">
              <img
                src="https://www.ekonomisyariah.org/wp-content/uploads/2022/06/Perkembangan-Wakaf-Uang-di-Indonesia.jpg"
                alt="wakaf"
                className="rounded-3xl w-[30rem] md:h-[20rem]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[4rem]">
        <div className=" container">
          <div className="md:flex ">
            <div className="md:w-[58%] flex ">
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                <CardCategory text="Wakaf Pendidikan" icon={education} />
                <CardCategory text="Wakaf Bangunan" icon={building} />
                <CardCategory text="Wakaf Kesehatan" icon={health} />
                <CardCategory text="Wakaf Umum" icon={ribbon} />
              </div>
            </div>
            <div className="md:w-[42%] ">
              <div className="py-[4rem]">
                <Typography color="btnColor">Kategori</Typography>
                <Typography
                  className="pt-9"
                  variant="h2"
                  color="primary-90"
                  type="bold"
                >
                  Beberapa Program Wakaf kami untuk anda
                </Typography>
                <Typography
                  className="pt-8 md:pt-10"
                  variant="body3"
                  color="neutral-90"
                >
                  Kami memiliki beberapa kategori wakaf yang memambantu anda
                  untuk menyalurkan wakaf anda
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-whiteBg py-[4rem]">
        <div className="container">
          <div className="text-center pb-8">
            <Typography variant="h3" color="navy" type="bold">
              Ayo Mulai Berwakaf
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-7">
            <CardWakaf />
            <CardWakaf />
            <CardWakaf />
          </div>
          <div className="flex justify-center pt-4">
            <Typography
              className="flex items-center text-center cursor-pointer"
              color="btnColor"
            >
              Lihat Lainnya
              <IoIosArrowRoundForward size={30} className="pl-1" />
            </Typography>
          </div>
        </div>
      </section>
      <section className="bg-whiteBg">
        <div className="container">
          <Player />
        </div>
      </section>
      <section className="bg-whiteBg ">
        <div className="container">
          <div className="text-center pb-9">
            <Typography variant="h3" color="navy" type="bold">
              Berita Wakaf
            </Typography>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <CardBerita />
            <CardBerita />
          </div>
          <div className=" flex justify-center pt-7">
            <Typography
              className="flex items-center text-center cursor-pointer"
              color="btnColor"
            >
              Lihat Lainnya
              <IoIosArrowRoundForward size={30} className="pl-2" />
            </Typography>
          </div>
        </div>
      </section>
      <section className="bg-whiteBg py-[6rem] ">
        <div className="container">
          <div className="text-center pb-9">
            <Typography variant="h3" color="navy" type="bold">
              Mitra Wakaf Al Hambra
            </Typography>
          </div>
          <CarouselMitra />
        </div>
      </section>
    </>
  );
}

export default Home;
