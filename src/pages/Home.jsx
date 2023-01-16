import { useState } from "react";
import education from "../assets/education.png";
import building from "../assets/building.png";
import health from "../assets/health.png";
import ribbon from "../assets/ribbon.png";
import { CardBerita, CardCategory, CardWakaf } from "../components/CustomCard";
import { GrFormNextLink } from "react-icons/gr";
import { CarouselMitra } from "../components/Carousel";
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";
import Player from "../components/Player";
function Home() {
  return (
    <Layout>
      <section className="bg-[#FBFBFB] pt-[8rem] pb-[5rem] ">
        <div className=" container">
          <div className=" md:flex ">
            <div className="md:w-[42%] ">
              <h1 className="text-5xl  text-Primary-900 font-bold md:leading-[55px]">
                Mari Berlomba Kebaikan dan Ayo Berwakaf
              </h1>
              <p className="py-8 text-sm md:text-base leading-5">
                Berbagi kepada sesama memberi jiwa rasa damai. Berbagi dengan
                tulus tanpa pamrih memberikan perasaan suka cita. ayo berwakaf
                bersama kami
              </p>
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
                <CardCategory text="Wakaf Pendidikan" icon={education} />
                <CardCategory text="Wakaf Bangunan" icon={building} />
              </div>
            </div>
            <div className="md:w-[42%] ">
              <div className="py-[4rem]">
                <p className="text-BtnColor">Kategori</p>
                <h1 className="text-5xl  text-Primary-900 font-bold leading-[55px] pt-9">
                  Beberapa Program Wakaf kami untuk anda
                </h1>
                <p className=" text-base leading-5 pt-9 md:pt-14 ">
                  Kami memiliki beberapa kategori wakaf yang memambantu anda
                  untuk menyalurkan wakaf anda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FBFBFB] py-[4rem]">
        <div className="container">
          <div className="text-center pb-8">
            <h1 className="text-4xl font-bold text-TitleText">
              Ayo Mulai Berwakaf{" "}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-y-7">
            <CardWakaf />
            <CardWakaf />
            <CardWakaf />
          </div>
          <div className=" flex justify-center pt-4">
            <span className="flex items-center text-center text-BtnColor cursor-pointer">
              Lihat Lainnya
              <GrFormNextLink size={30} className="pl-1" color="#F98D3E" />
            </span>
          </div>
        </div>
      </section>
      <section className="bg-[#FBFBFB]">
        <div className="container">
          <Player />
        </div>
      </section>
      <section className="bg-[#FBFBFB] py-[2rem]">
        <div className="container">
          <div className="text-center pb-9">
            <h1 className="text-4xl font-bold text-TitleText">Berita Wakaf</h1>
          </div>
          <div className=" grid md:grid-cols-2 gap-8">
            <CardBerita />
            <CardBerita />
          </div>
          <div className=" flex justify-center pt-7">
            <span className="flex items-center text-center  text-BtnColor cursor-pointer">
              Lihat Lainnya
              <GrFormNextLink size={30} className="pl-1 text-BtnColor" />
            </span>
          </div>
        </div>
      </section>
      <section className="bg-[#FBFBFB]  py-[2rem] pb-[5rem]">
        <div className="container">
          <div className="text-center pb-9">
            <h1 className="text-4xl font-bold text-TitleText">
              Mitra Wakaf Al Hambra
            </h1>
          </div>
          <CarouselMitra />
        </div>
      </section>
    </Layout>
  );
}

export default Home;
