import React from "react";

const CardCategory = ({ text, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[8rem] lg:w-[10rem] bg-white shadow-xl px-4 py-9 rounded-lg "
    >
      <div className="items-center flex justify-center">
        {" "}
        <img
          src={icon}
          className="w-[3rem] h-[3rem] p-2 rounded-full bg-Primary-900"
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
    <div className="w-[15rem] lg:w-[22rem] bg-white p-6 rounded-3xl shadow-xl">
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
      <div className="flex justify-center pt-4">
        {" "}
        <button className=" px-4 py-2 text-sm rounded-md bg-BtnColor text-white ">
          Wakaf Sekarang
        </button>
      </div>
    </div>
  );
};
export { CardCategory, CardWakaf };
