import React from "react";
import { CarouselBerita } from "../components/Carousel/Carousel";
import { CardBeritaWakaf } from "../components/Cards/CustomCard";
import { PaginationCard } from "../components/Pagination/Pagination";

const BeritaWakaf = () => {
  return (
    <>
      <div className="container pb-[8rem]">
        <section className="pt-[8rem] pb-[5rem]">
          <CarouselBerita />
        </section>
        <section className="space-y-9">
          <CardBeritaWakaf />
          <CardBeritaWakaf />
          <CardBeritaWakaf />
        </section>
        <div className="pt-14 flex justify-end">
          <PaginationCard />
        </div>
      </div>
    </>
  );
};

export default BeritaWakaf;
