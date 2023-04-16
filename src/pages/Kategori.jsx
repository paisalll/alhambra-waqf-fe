import React, { useMemo, useState } from "react";
import CardCategory from "../components/Cards/CardCategory";
import CardWakaf from "../components/Cards/CardWakaf";
import { PaginationCard } from "../components/Pagination/Pagination";
import Typography from "../components/Typography/Typography";
import { useWakaf } from "../api/wakaf ";
import data from "../data/categories";
const Kategori = () => {
  const [categories, setCategories] = useState(data);
  const { wakaf, wakafErrorLoading } = useWakaf();
  const categoryWakaf = wakaf?.map((item) => item.category);

  const filterCategory = useMemo(() => {
    return data.filter((item) => item.categories === categoryWakaf);
  });
  return (
    <>
      <section className="pt-[8rem] pb-[5rem] ">
        <div className=" container">
          <div className=" md:flex justify-center pb-7">
            <Typography className="md:leading-[55px]" type="bold" variant="h2" color="navy">
              Pilihan Kategori Wakaf
            </Typography>
          </div>
          <div className="grid grid-cols-4  place-items-center">
            {categories?.map((item) => (
              <CardCategory
                title={item.title}
                icon={item.icon}
                category={categories}
                key={item.id}
                filterCategory={filterCategory}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#FBFBFB] py-[4rem]">
        <div className=" container">
          <div className="md:flex pb-7 ">
            <Typography variant="h3" type="bold" color="navy">
              Program Wakaf Pendidikan
            </Typography>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {wakaf?.map((item, i) => (
              <CardWakaf
                key={item.id}
                id={item.id}
                img={item.picture}
                category={item.category}
                collected={item.collected}
                fundTarget={item.fund_target}
                title={item.title}
                due_date={item.due_date}
              />
            ))}
          </div>
        </div>
        <div className="container pt-14 flex justify-end">
          <PaginationCard />
        </div>
      </section>
    </>
  );
};

export default Kategori;
