import React from "react";
import { CarouselBerita } from "../components/Carousel/CarouselBerita";
import CardBeritaWakaf from "../components/Cards/CardBeritaWakaf";
import { PaginationCard } from "../components/Pagination/Pagination";
import useBerita from "../api/berita";

const BeritaWakaf = () => {
  const { berita, beritaErrorLoading } = useBerita();

  return (
    <>
      <div className="container pb-[8rem]">
        <section className="pt-[8rem] pb-[5rem]">
          <CarouselBerita />
        </section>
        <section className="space-y-9">
          {berita?.map((item) => (
            <CardBeritaWakaf
              key={item.id_news}
              id_news={item.id_news}
              title={item.title}
              body={item.body}
              picture={item.picture}
              updated_at={item.updated_at}
            />
          ))}
        </section>
        <div className="pt-14 flex justify-end">
          <PaginationCard />
        </div>
      </div>
    </>
  );
};

export default BeritaWakaf;
