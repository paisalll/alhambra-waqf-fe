import Typography from "../Typography/Typography";
import React from "react";

export const CardDisplayBerita = ({ id, title, updated_at, picture }) => {
  return (
    <div className="w-[18rem]" key={id}>
      <img src={picture} alt="gbrWakaf" className="h-[15rem] w-full rounded-xl object-cover" />
      <div className="flex justify-between pt-4">
        <Typography variant="body3" color="neutral-80">
          Artikel
        </Typography>
        <Typography variant="body3" color="neutral-80">
          {updated_at}
        </Typography>
      </div>
      <div className="pt-6">
        <Typography color="navy" variant="bbody1">
          {title}
        </Typography>
      </div>
    </div>
  );
};
