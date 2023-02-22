import React from "react";
import Typography from "../components/Typography/Typography";
import { CardDisplayBerita } from "../components/Cards/CardDisplayBerita";
export default function DetailBerita() {
  return (
    <div className="container pt-[8rem] pb-[5rem]">
      <div className="w-full">
        <img
          src="https://i0.wp.com/konsultasisyariah.com/wp-content/uploads/2017/02/tanah-wakaf-masjid.jpg"
          alt="berita"
          className="w-full h-[25rem] object-cover rounded-[5px]"
        />
      </div>
      <section className="pt-6">
        <Typography variant="h3" type="medium" color="navy">
          Pembangunan Mesjid Al-Hambra di daerah Palsetina
        </Typography>
        <div className="flex gap-3 pt-6">
          <Typography type="normal" variant="body3" color="neutral-80">
            by <span className="text-text01">Al-Hambra</span>
          </Typography>
          <Typography type="normal" variant="body3" color="neutral-80">
            |
          </Typography>
          <Typography type="normal" variant="body3" color="neutral-80">
            12 Juli 2022
          </Typography>
        </div>
        <div className=""></div>
      </section>
      <section className="pt-20">
        <Typography type="normal" variant="h4" color="navy">
          Berita Lainnya
        </Typography>
        <div className="pt-6 grid grid-cols-3 gap-8">
          <CardDisplayBerita />
          <CardDisplayBerita />
          <CardDisplayBerita />
        </div>
      </section>
    </div>
  );
}
