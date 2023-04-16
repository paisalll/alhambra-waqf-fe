import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import * as clipboard from "clipboard-polyfill";
import toast, { Toaster } from "react-hot-toast";
import Typography from "../../Typography/Typography";
export const DetailPembayaran = () => {
  let no_rekening = " 5282 3456 7890 1289";

  const [selectedRekening, setSelectedRekening] = useState(no_rekening);
  const onCopyNoRekening = async () => {
    const noRekening = selectedRekening.replace(/\D/g, "");
    try {
      await clipboard.writeText(noRekening);
      toast.success("Nominal Pembayaran Berhasil di Copy", {
        style: {
          fontSize: 12,
        },
      });
    } catch {
      toast.error("Nominal Pembayaran Gagal di Copy");
    }
  };
  return (
    <div>
      <div className="group-input pb-4">
        <label className=" text-base text-text03 font-medium pb-1">Nama Donatur</label>
        <input placeholder="" disabled className="input-text" />
      </div>
      <div className="group-input pb-4">
        <label className=" text-base text-text03 font-medium pb-1">Program</label>
        <input placeholder="" disabled className="input-text" />
      </div>
      <div className="group-input pb-4">
        <label className=" text-base text-text03 font-medium pb-1">Waktu Transaksi</label>
        <input placeholder="" disabled className="input-text" />
      </div>

      <Typography color="text01" type="normal" variant="body1" className="pb-1">
        Nominal wakaf yang dibayar
      </Typography>
      <button className="btn-nominal">
        <Typography color="primary-90" type="medium" variant="h5">
          Rp 500.000
        </Typography>
        <button
          className=" border-none outline-none bg-transparent cursor-pointer"
          onClick={onCopyNoRekening}
        >
          <span className="text-text02">
            <MdContentCopy size={20} />
          </span>
        </button>
      </button>
      <Typography color="text03" type="normal" variant="body3" className="pt-2 pb-4">
        Bayar wakaf anda sebelum <b>25 February 2023 23:32 WIB </b>atau donasi Anda otomatis
        dibatalkan oleh sistem.
      </Typography>
    </div>
  );
};
