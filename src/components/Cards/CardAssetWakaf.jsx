import React from "react";
import { CardSimples } from "./Styled";
import Typography from "../Typography/Typography";
const CardAssetWakafLarge = ({ asset }) => {
  return (
    <div>
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
    </div>
  );
};
const CardAssetWakafSmall = ({ asset }) => {
  return (
    <CardSimples bg="white" height="auto" width="24rem" br="12px" className="shadow-custom">
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
  );
};
export { CardAssetWakafLarge, CardAssetWakafSmall };
