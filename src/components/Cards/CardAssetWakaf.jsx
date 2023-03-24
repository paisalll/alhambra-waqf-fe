import React from "react";
import { CardSimples } from "./Styled";
import Typography from "../Typography/Typography";
const CardAssetWakafLarge = () => {
  return (
    <div>
      <CardSimples bg="white" height="auto" width="35rem" br="12px" className="shadow-custom">
        <img
          src="https://cdn0-production-images-kly.akamaized.net/r3Vb-El4eSYhMpaJ0Gfj746AtjM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/755908/original/073849700_1414158415-x6.jpg"
          alt="asset-wakaf"
          className="object-cover rounded-lg h-[22.4rem] w-full"
        />
        <Typography color="text01" variant="body1" type="medium">
          Wakaf Al-Hambra
        </Typography>
        <Typography variant="body3" color="neutral-90">
          Yayasan Al Hambra membangun masjid sejak tahun 2020 lengkap dengan karpet, sound system,
          mushaf al-Quran, toilet, tempat wudhu dan sebagainya
        </Typography>
      </CardSimples>
    </div>
  );
};
const CardAssetWakafSmall = () => {
  return (
    <CardSimples bg="white" height="auto" width="24rem" br="12px" className="shadow-custom">
      <img
        src="https://cdn0-production-images-kly.akamaized.net/r3Vb-El4eSYhMpaJ0Gfj746AtjM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/755908/original/073849700_1414158415-x6.jpg"
        alt="asset-wakaf"
        className="object-cover rounded-lg h-[7rem] w-full"
      />
      <Typography color="text01" variant="body1" type="medium">
        Wakaf Al-Hambra
      </Typography>
      <Typography variant="body3" color="neutral-90">
        Yayasan Al Hambra membangun masjid sejak tahun 2020
      </Typography>
    </CardSimples>
  );
};
export { CardAssetWakafLarge, CardAssetWakafSmall };
