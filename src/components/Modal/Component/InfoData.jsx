import React from "react";
import { Checkbox } from "antd";
import Typography from "../../Typography/Typography";
import "../Modal.scss";
export const InfoData = () => {
  const onChange = (e) => {
    e.target.checked;
  };
  return (
    <form className="pt-4">
      <div className="group-input">
        <label className=" text-lg text-text01 pb-1">
          Nama <span className="required-field"></span>
        </label>
        <input placeholder="Nama Lengkap" className="input-text" />
      </div>
      <Checkbox onChange={onChange} className="pt-2">
        <Typography type="body3" color="text03" variant="normal">
          Sembunyikan nama saya (Hamba Allah)
        </Typography>
      </Checkbox>
      <div className="group-input pt-7">
        <label className="text-lg text-text01 pb-1">
          Tulis Doa atau dukungan <span className="text-text03">(Optional)</span>
        </label>
        <textarea placeholder="Tuliskan sesuatu..." className="input-textArea" />
        <Typography className="flex justify-end">0/80</Typography>
      </div>
      <Checkbox onChange={onChange} checked={true} className="pt-3 pb-2">
        <Typography type="body3" color="text03" variant="normal">
          Saya menyetujui syarat dan ketentuan yang berlaku
        </Typography>
      </Checkbox>
    </form>
  );
};
