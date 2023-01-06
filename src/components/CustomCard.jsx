import React from "react";
import education from "../assets/education.png";
import building from "../assets/building.png";
import health from "../assets/health.png";
import ribbon from "../assets/ribbon.png";
export const CardCategory = ({ text, icon }) => {
  return (
    <div className="w-[12rem] bg-white shadow-xl px-3 py-4 rounded-lg ">
      <div className="items-center flex justify-center">
        {" "}
        <img
          src={education}
          className="w-[3rem] h-[3rem] p-2 rounded-full bg-Primary-900"
        />
      </div>
      <div className="flex text-center justify-center pt-3">
        <h2 className="w-1/2">Wakaf Pendidikan</h2>
      </div>
    </div>
  );
};

export const CardWakaf = () => {
  return <div className="">hello</div>;
};
export default { CardCategory };
