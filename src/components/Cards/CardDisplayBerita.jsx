import Typography from "../Typography/Typography";
import React from "react";

export const CardDisplayBerita = () => {
  return (
    <div className=" w-[21rem]">
      <img
        src="https://images.unsplash.com/photo-1552392497-16ceed8ab81a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
        alt="gbrWakaf"
        className="h-[19rem] w-full rounded-xl object-cover"
      />
      <div className="flex justify-between pt-4">
        <Typography variant="body3" color="neutral-80">
          Artikel
        </Typography>
        <Typography variant="body3" color="neutral-80">
          10 Juli 2021
        </Typography>
      </div>
      <div className="pt-6">
        <Typography color="navy" variant="bbody1">
          Contoh Wakaf Atas Nama Sosok Yang Telah Meninggal Dunia
        </Typography>
      </div>
    </div>
  );
};
