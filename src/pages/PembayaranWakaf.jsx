import React, { useState } from "react";
import Typography from "../components/Typography/Typography";
import { MdContentCopy } from "react-icons/md";
import * as clipboard from "clipboard-polyfill";
import toast, { Toaster } from "react-hot-toast";
import ModalPayment from "../components/Modal";

export default function PembayaranWakaf() {
  let no_rekening = " 5282 3456 7890 1289";

  const [showModal, setShowModal] = useState(false);
  const [selectedRekening, setSelectedRekening] = useState(no_rekening);
  const onCopyNoRekening = async () => {
    const noRekening = selectedRekening.replace(/\D/g, "");
    try {
      await clipboard.writeText(noRekening);
      toast.success("No Rekening Berhasil di Copy", {
        style: {
          fontSize: 12,
        },
      });
    } catch {
      toast.error("No Rekening gagal di Copy");
    }
  };
  return (
    <section className="pt-[8rem] pb-[5rem] bg-whiteBg">
      <div className="container">
        <Typography color="primary-90" variant="h2" type="bold">
          Rekening Wakaf
        </Typography>
        <Typography variant="body3" color="text02" className="pt-4">
          Kami juga melayani pembayaran wakaf secara manual, untuk transaksi ini kami meminta anda
          untuk menghubungi kami via Whatsapp dengan mengirimakan pesan kepada kami program mana
          yang ingin anda berwakaf. Berikut adalah nomor rekening kami:
        </Typography>
        <div className="w-[20rem] mt-12 ">
          <div className="shadow-xl">
            <div className="bg-white rounded-2xl pr-1">
              <div className="flex justify-end">
                <div className="h-[1.5rem] w-[2.5rem]">
                  <img
                    src="https://brand.mastercard.com/content/dam/mccom/brandcenter/brand-history/brandhistory_mc_vrt_120_2x.png"
                    alt="icon-credit"
                    className="h-[1.5rem] w-[2.5rem]  object-contain"
                  />
                </div>
              </div>
              <div className="pl-5 pb-4">
                <div className="h-[2rem] w-[6rem]">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/1280px-Bank_Syariah_Indonesia.svg.png"
                    alt="logo-bank"
                    className="h-[2rem] w-[6rem] object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="bg-primary-90 pl-5 py-6 pr-3 rounded-b-2xl">
              <div className="flexBetween">
                <Typography color="white" type="bold" variant="body1">
                  5282 3456 7890 1289
                </Typography>
                <button
                  className=" border-none outline-none bg-transparent cursor-pointer"
                  onClick={onCopyNoRekening}
                >
                  <span className="text-white">
                    <MdContentCopy size={20} />
                  </span>
                </button>
              </div>
              <Typography variant="body3" color="white" className="pt-4">
                Atas nama:
              </Typography>
            </div>
          </div>
        </div>
        <button type="primary" onClick={() => setShowModal(true)}>
          Open Modal
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
      <ModalPayment
        isModalOpen={showModal}
        handleCancel={() => setShowModal(false)}
        handleOk={() => setShowModal(false)}
      />
    </section>
  );
}
