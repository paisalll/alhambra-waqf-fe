import React from "react";

const CardCategory = ({ text, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[9rem] lg:w-[13rem] bg-white shadow-xl px-8  py-[2rem] md:px-10 md:py-[2.7rem] rounded-3xl "
    >
      <div className="items-center flex justify-center">
        <img
          src={icon}
          className="w-[3.5rem] h-[3.5rem] p-2 rounded-full bg-Primary-900"
        />
      </div>
      <div className="text-center pt-5">
        <h2 className="text-sm md:text-base font-medium text-[#333333] ">
          {text}
        </h2>
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
        <h3 className="text-sm text-BtnColor font-medium pb-1">Pendidikan</h3>
        <h2 className="leading-snug text-sm text-SubText font-semibold  ">
          Wakaf Pengadaan mobil ambulance gratis bagi yang membutuhkan
        </h2>
      </div>
      <div className="flex justify-center pt-5">
        {" "}
        <button className=" px-4 py-2 text-sm rounded-md bg-BtnColor text-white ">
          Wakaf Sekarang
        </button>
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
        <h3 className="text-lg text-TitleText font-medium pb-1 leading-1">
          Pembangunan Mesjid Al-Hambra di daerah Tanggerang Selatan
        </h3>
        <p className="leading-snug text-sm text-SubText  pt-6  ">
          Pembangunan mesjid Al-Hambra sudah hampir siap untuk digunakan.
        </p>

        <p className="text-BtnColor text-sm pt-3 cursor-pointer">
          Baca Selengkapnya
        </p>
      </div>
    </div>
  );
};
export { CardCategory, CardWakaf, CardBerita };
