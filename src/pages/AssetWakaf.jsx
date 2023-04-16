import PaginationCard from "../components/Pagination";
import React from "react";
import { CardAssetWakafLarge, CardAssetWakafSmall } from "../components/Cards/CardAssetWakaf";
import Typography from "../components/Typography/Typography";
import useAsset from "../api/asset";
import { CardSimples } from "../components/Cards/Styled";
const AssetWakaf = () => {
  const { data: assetWakaf } = useAsset();
  return (
    <section className="container pt-[8rem] pb-[5rem]">
      <Typography color="primary-90" type="medium" variant="h3">
        Aset Wakaf
      </Typography>
      <div className="pt-6">
        {assetWakaf?.map((asset, i) => (
          <div className="flex gap-x-6">
            {/* <CardAssetWakafLarge asset={asset} /> */}
            <CardSimples bg="white" height="auto" width="35rem" br="12px" className="shadow-custom">
              <img
                src={asset?.picture}
                alt="asset-wakaf"
                className="object-cover rounded-lg h-[22.4rem] w-full"
              />
              <Typography color="text01" variant="body1" type="medium">
                {asset?.name}
              </Typography>
              <Typography variant="body3" color="neutral-90">
                {asset?.detail}
              </Typography>
            </CardSimples>
            <div className="flex flex-col gap-y-6">
              {/* <CardAssetWakafSmall asset={asset} /> */}
              <CardSimples
                bg="white"
                height="auto"
                width="24rem"
                br="12px"
                className="shadow-custom"
              >
                <img
                  src={asset?.picture}
                  alt="asset-wakaf"
                  className="object-cover rounded-lg h-[7rem] w-full"
                />
                <Typography color="text01" variant="body1" type="medium">
                  {asset?.name}
                </Typography>
                <Typography variant="body3" color="neutral-90">
                  {asset?.detail}
                </Typography>
              </CardSimples>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex gap-x-6 py-6">
              <div className="flex flex-col gap-y-6">
                <CardAssetWakafSmall key={"asset-" + asset.id_asset} index={i} asset={asset} />
                <CardAssetWakafSmall key={"asset-" + asset.id_asset} index={i} asset={asset} />
              </div>
              <CardAssetWakafLarge key={"asset-" + asset.id_asset} index={i} asset={asset} />
            </div>
            <div className="flex flex-row gap-x-6">
              <CardAssetWakafSmall key={"asset-" + asset.id_asset} index={i} asset={asset} />
              <CardAssetWakafSmall key={"asset-" + asset.id_asset} index={i} asset={asset} />
            </div> */}

      <div className="pt-6 flex justify-end">
        <PaginationCard />
      </div>
    </section>
  );
};

export default AssetWakaf;
