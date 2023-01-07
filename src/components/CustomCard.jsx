import React from "react";

export const CardCategory = ({ text, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[12rem] bg-white shadow-xl px-3 py-4 rounded-lg "
    >
      <div className="items-center flex justify-center">
        {" "}
        <img
          src={icon}
          className="w-[3rem] h-[3rem] p-2 rounded-full bg-Primary-900"
        />
      </div>
      <div className="flex text-center justify-center pt-3">
        <h2 className="w-1/2">{text}</h2>
      </div>
    </div>
  );
};

export const CardWakaf = () => {
  return (
    <div className="w-[23rem] bg-white p-3 rounded-lg shadow-xl">
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/13/86/fa/ca/masjid-al-ismaili.jpg"
        className="object-cover rounded"
        alt="Foto Wakaf"
      />
      <div className="pt-2">
        <h2 className="text-SubText font-semibold text-lg ">
          Wakaf Pengadaan mobil ambulance gratis bagi yang membutuhkan
        </h2>
        <p>
          Mobil ambulance yang nantinya gratis untuk antar jemput jenazah atau
          antar jemput orang sakit bagi yang membutuhkan
        </p>
        <button className="px-3 py-2 bg-BtnColor">Detail</button>
      </div>
    </div>
  );
};
export default { CardCategory };
