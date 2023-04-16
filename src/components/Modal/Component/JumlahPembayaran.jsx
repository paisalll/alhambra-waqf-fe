import Typography from "../../Typography/Typography";
import React, { useState } from "react";
import { Progress } from "antd";
import { Radio, Row } from "antd";
import "../Modal.scss";
const optionsWithButton = [
  {
    label: "Rp 5.000",
    value: "Rp 5.000",
  },
  {
    label: "Rp 10.000",
    value: "Rp 10.000",
  },
  {
    label: "Rp 50.000",
    value: "Rp 50.000",
  },
  {
    label: "Rp 100.000",
    value: "Rp 100.000",
  },
  {
    label: "Rp 500.000",
    value: "Rp 500.000",
  },
  {
    label: "Rp 1.000.000",
    value: "Rp 1.000.000",
  },
  {
    label: "Rp 2.000.000",
    value: "Rp 2.000.000",
  },
  {
    label: "Maksimal",
    value: "20.000.000",
  },
];
export const JumlahPembayaran = () => {
  const [value, setValue] = useState("Rp 5.000");
  const onChangeBtn = ({ target: { value } }) => {
    console.log("radio4 checked", value);
    setValue(value);
  };
  return (
    <>
      <div className="flex flex-row">
        <img
          src="https://blitarkota.kemenag.go.id/sites/default/files/articles/wakaf_uan.jpg"
          className="h-[6rem] w-[10rem] object-cover rounded-xl"
        />
        <div className="ml-5 flex flex-col justify-between">
          <Typography color="neutral-90">
            Kategori <span className="text-btnColor">Wakaf Pembangunan</span>
          </Typography>
          <Typography type="semibold" variant="body1" color="text01" className="text-ellipsis">
            Pembangunan Mesjid Al-Hambra di daerah Palsetina
          </Typography>
        </div>
      </div>
      <div className="pt-4">
        <div className="between pb-2">
          <Typography color="neutral-90" type="normal" variant="body3">
            Terkumpul
          </Typography>
          <Typography color="neutral-90" type="normal" variant="body3">
            Dana Dibutuhkan
          </Typography>
        </div>
        <div className="between">
          <Typography color="primary-90" type="medium" variant="body2">
            Rp.20.000.000
          </Typography>
          <Typography color="text01" type="medium" variant="body2">
            Rp.100.000.000
          </Typography>
        </div>
        <Progress percent={30} strokeColor={"#3862A5"} showInfo={false} />
        <Typography className="flex justify-end">30 Hari lagi</Typography>
      </div>
      <div className="pt-1">
        <Typography variant="body1" color="text01" type="medium" className="pb-3">
          Nominal Donasi
        </Typography>
        <Row>
          <Radio.Group
            options={optionsWithButton}
            onChange={onChangeBtn}
            value={value}
            optionType="button"
            buttonStyle="solid"
            style={{ gap: 30 }}
          />
        </Row>
      </div>
      <div className="pt-4">
        <input placeholder="Rp." disabled className="input-pembayaran w-full" />
        <Typography color="primary-90" variant="normal" type="body1" className="italic">
          Minimal wakaf Rp5.000
        </Typography>
      </div>
    </>
  );
};
