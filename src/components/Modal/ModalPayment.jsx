import React, { useState } from "react";
import { Modal } from "antd";
import { JumlahPembayaran } from "./Component/JumlahPembayaran";
import { InfoData } from "./Component/InfoData";
import { DetailPembayaran } from "./Component/DetailPembayaran";
import clsx from "clsx";
import "./Modal.scss";
export const ModalPayment = ({ isModalOpen, handleOk, handleCancel }) => {
  const [page, setPage] = useState(0);

  const titleModal = ["", "Lengkapi Data Berikut", "Detail Pembayaran"];
  const pageModalFirst = page == 0;
  const btnNexDisabled = page == titleModal.length - 2;

  const pageDisplay = () => {
    if (page === 0) {
      return <JumlahPembayaran />;
    } else if (page === 1) {
      return <InfoData />;
    } else {
      return <DetailPembayaran />;
    }
  };
  return (
    <>
      <Modal
        footer={
          <div className="flex justify-between">
            <button
              className={clsx(pageModalFirst ? "hidden" : "inline", "btn-back")}
              onClick={() => {
                setPage((page) => page - 1);
              }}
            >
              Kembali
            </button>
            <div className="">
              <button
                // disabled={btnBackDisabled}
                onClick={() => {
                  setPage((page) => page + 1);
                }}
                className="btn-next"
              >
                Selanjutnya
              </button>
            </div>
          </div>
        }
        
        title={titleModal[page]}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        // centered
        // style={{ height: "calc(100vh - 10px - 30px)" }}
      >
        <div>{pageDisplay()}</div>
      </Modal>
    </>
  );
};
