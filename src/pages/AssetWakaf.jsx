import PaginationCard from "../components/Pagination";
import React from "react";
import { CardAssetWakafLarge, CardAssetWakafSmall } from "../components/Cards/CardAssetWakaf";
import Typography from "../components/Typography/Typography";

const AssetWakaf = () => {
  return (
    <section className="container pt-[8rem] pb-[5rem]">
      <Typography color="primary-90" type="medium" variant="h3">
        Aset Wakaf
      </Typography>
      <div className="pt-6">
        <div className="flex gap-x-6">
          <CardAssetWakafLarge />
          <div className="flex flex-col gap-y-6">
            <CardAssetWakafSmall />
            <CardAssetWakafSmall />
          </div>
        </div>
        <div className="flex gap-x-6 py-6">
          <div className="flex flex-col gap-y-6">
            <CardAssetWakafSmall />
            <CardAssetWakafSmall />
          </div>
          <CardAssetWakafLarge />
        </div>
        <div className="flex flex-row gap-x-6">
          <CardAssetWakafSmall />
          <CardAssetWakafSmall />
        </div>
      </div>
      <PaginationCard />
    </section>
  );
};

export default AssetWakaf;
