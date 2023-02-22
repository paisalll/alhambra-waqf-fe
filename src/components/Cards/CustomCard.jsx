import React from "react";
import CustomButton from "../Button/CustomButton";
import Typography from "../Typography/Typography";
import { Pagination, Progress } from "antd";
import { IoIosArrowRoundForward } from "react-icons/io";
const CardCategory = ({ text, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[9rem] lg:w-[13rem] bg-white shadow-xl px-8  py-[2rem] md:px-10 md:py-[2.7rem] rounded-3xl "
    >
      <div className="items-center flex justify-center">
        <img
          src={icon}
          className="w-[3.5rem] h-[3.5rem] p-2 rounded-full bg-primary-90"
        />
      </div>
      <div className="text-center pt-5">
        <Typography
          className=" md:text-base"
          variant="h5"
          type="medium"
          color="navy"
        >
          {text}
        </Typography>
      </div>
    </div>
  );
};

const CardWakaf = () => {
  return (
    <div className="w-[20rem] lg:w-[21rem] bg-white p-5 md:p-6 rounded-3xl shadow-xl">
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/13/86/fa/ca/masjid-al-ismaili.jpg"
        className="object-cover rounded-3xl h-[10rem] md:h-[12rem] w-full"
        alt="Foto Wakaf"
      />
      <div className="pt-3">
        <Typography
          className="pb-1"
          color="btnColor"
          type="medium"
          variant="body3"
        >
          Pendidikan
        </Typography>
        <Typography
          className="leading-snug"
          type="semibold"
          color="navy"
          variant="body3"
        >
          Wakaf Pengadaan mobil ambulance gratis bagi yang membutuhkan
        </Typography>
      </div>
      <div className="pt-3">
        <div className="flex justify-between">
          <Typography color="primary-90" type="normal" variant="body3">
            Rp2.000.000
          </Typography>
          <Typography color="primary-60" type="normal" variant="body3">
            Rp20.000.000
          </Typography>
        </div>

        <Progress percent={30} strokeColor={"#3862A5"} showInfo={false} />

        <div className="flex justify-between">
          <Typography color="neutral-90" type="normal" variant="body3">
            Terkumpul
          </Typography>
          <Typography color="neutral-90" type="normal" variant="body3">
            100 Hari Lagi
          </Typography>
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <CustomButton label="Wakaf Sekarang" color="Primary" />
      </div>
    </div>
  );
};

const CardBerita = () => {
  return (
    <div className="flex  ">
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/13/86/fa/ca/masjid-al-ismaili.jpg"
        className="object-cover rounded-3xl h-[10rem] md:h-[10rem] w-20%"
        alt="Foto Wakaf"
      />
      <div className="pl-4">
        <Typography className="pb-1" color="navy" type="medium">
          Pembangunan Mesjid Al-Hambra di daerah Tanggerang Selatan
        </Typography>
        <Typography
          className="leading-snug pt-6"
          color="neutral-90"
          type="normal"
          variant="body3"
        >
          Pembangunan mesjid Al-Hambra sudah hampir siap untuk digunakan.
        </Typography>

        <Typography
          className="pt-4 cursor-pointer items-center flex"
          color="btnColor"
          variant="body3"
        >
          Baca Selengkapnya
          <IoIosArrowRoundForward size={30} className="pl-2" />
        </Typography>
      </div>
    </div>
  );
};

const CardBeritaWakaf = () => {
  return (
    <div className="flex ">
      <div className="w-[40%]">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/13/86/fa/ca/masjid-al-ismaili.jpg"
          className="object-cover rounded-3xl w-full h-[14rem]"
          alt="Foto Wakaf"
        />
      </div>
      <div className="pl-9 w-[60%]">
        <Typography className="pb-1" color="navy" type="medium" variant="h3">
          Pembangunan Mesjid Al-Hambra di daerah Tanggerang Selatan
        </Typography>
        <Typography className="pt-2" type="body3" color="neutral-80">
          11 Juli 2022
        </Typography>
        <Typography
          className="leading-snug pt-4"
          variant="body3"
          color="neutral-90"
        >
          Yayasan Al Hambra membangun masjid sejak tahun 2020 lengkap dengan
          karpet, sound system, mushaf al-Quran, toilet, tempat wudhu dan
          sebagainya bagi kaum muslimin yang membutuhkan
        </Typography>
        <div className="flex  justify-end">
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
export { CardCategory, CardWakaf, CardBerita, CardBeritaWakaf };
