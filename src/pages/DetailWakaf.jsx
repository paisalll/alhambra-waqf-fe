import React, { useMemo } from "react";
import { CardSimples } from "../components/Cards/Styled/index";
import { Progress } from "antd";
import { useWakaf } from "../api/wakaf";
import { useWakafById } from "../api/wakafSingle";
import { useParams } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { AiOutlinePaperClip } from "react-icons/ai";
import Typography from "../components/Typography/Typography";
import CardWakaf from "../components/Cards/CardWakaf";
import logoAlhambra from "../assets/logoAlhambra.png";
import iconProfile from "../assets/svg/ic-profil.svg";
import CustomButton from "../components/Button";
import "../styles/detailWakaf.scss";
const DetailWakaf = () => {
  let { id_wakaf } = useParams();
  const { wakaf, wakafErrorLoading } = useWakaf();
  const { data: wakadById, error } = useWakafById(id_wakaf);

  return (
    <>
      <div className="w-full">
        <img
          src={
            wakadById?.picture ||
            "https://images.pexels.com/photos/8148443/pexels-photo-8148443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="wakaf"
          className="w-full h-[35rem] object-cover object-center"
        />
      </div>
      <div className="container">
        <section className="container_card position_top">
          <div className="w-[65%]">
            <CardSimples
              bg="white"
              height="auto"
              width="auto"
              br="12px"
              className="flex items-center justify-center shadow-custom "
            >
              <Typography
                className="leading-snug cursor-pointer multiline-ellipsis pb-5"
                type="semibold"
                color="navy"
                variant="body1"
              >
                {wakadById?.title}
              </Typography>
              <Typography variant="body2" color="text02" type="normal" className=" text-justify">
                Warga Palestina, Sheraze Aliya Gaza membagikan video progress pembangunan masjid
                tersebut lewat video yang diunggah di akun Instagramnya, @sheraze_aliya_gaza. Di
                video tersebut, terlihat bahwa progres pembangunan Masjid Syaikh Ajlin sudah
                memasuki tahap akhir.
                <br />
                <br />
                {wakadById?.detail}
                Warga Palestina, Sheraze Aliya Gaza membagikan video progress pembangunan masjid
                tersebut lewat video yang diunggah di akun Instagramnya, @sheraze_aliya_gaza. Di
                video tersebut, terlihat bahwa progres pembangunan Masjid Syaikh Ajlin sudah
                memasuki tahap akhir Warga Palestina, Sheraze Aliya Gaza membagikan video progress
                pembangunan masjid tersebut lewat video yang diunggah di akun Instagramnya,
                @sheraze_aliya_gaza.
                <br />
                <br /> Di video tersebut, terlihat bahwa progres pembangunan Masjid Syaikh Ajlin
                sudah memasuki tahap akhir Warga Palestina, Sheraze Aliya Gaza membagikan video
                progress pembangunan masjid tersebut lewat video yang diunggah di akun Instagramnya,
                @sheraze_aliya_gaza. Di video tersebut, terlihat bahwa progres pembangunan Masjid
                Syaikh Ajlin sudah memasuki tahap akhir
              </Typography>
            </CardSimples>
          </div>
          <div className="w-[35%]">
            <CardSimples bg="white" height="auto" width="auto" br="12px" className="shadow-custom ">
              <Typography color="text03" variant="body3" type="normal">
                Kategori{" "}
                <span className="text-sm text-btnColor font-semibold capitalize">
                  {wakadById?.category}
                </span>
              </Typography>
              <div className="flex justify-between pt-6">
                <Typography color="text03" type="normal" variant="btnXS">
                  Terkumpul
                </Typography>

                <Typography color="text03" type="normal" variant="btnXS">
                  Dana Dibutuhkan
                </Typography>
              </div>
              <div className="flex justify-between pt-2">
                <Typography color="primary-90" type="semibold" variant="body1">
                  Rp.{wakadById?.fund_target}
                </Typography>

                <Typography color="primary-90" type="semibold" variant="body1">
                  {wakadById?.collected}
                </Typography>
              </div>
              <Progress percent={30} strokeColor={"#3862A5"} showInfo={false} />
              <div className="flex justify-end pt-2">
                <Typography color="text03" type="normal" variant="btnXS">
                  {wakadById?.due_date} Hari lagi
                </Typography>
              </div>
              <div className="flex justify-center pt-6">
                <CustomButton color="Primary" label="Wakaf Sekarang" className="w-12" />
              </div>
              <div className="social_button">
                <div className="btn_logo bg-whatsapp">
                  <FaWhatsapp size={25} />
                </div>
                <div className="btn_logo bg-facebook ">
                  <FaFacebookF size={20} />
                </div>
                <div className="btn_logo bg-twitter">
                  <FaTwitter size={20} />
                </div>
                <div className="btn_logo bg-neutral-70">
                  <AiOutlinePaperClip size={20} />
                </div>
              </div>
            </CardSimples>

            <CardSimples
              bg="white"
              height="auto"
              width="auto"
              br="12px"
              className="mt-6 shadow-custom"
            >
              <div className="flex gap-x-4">
                <img src={logoAlhambra} alt="logo-alhambra" className="h-12 w-12 " />
                <div>
                  <Typography color="text02" type="medium" variant="body3">
                    Penggalangan Wakaf Dimulai
                  </Typography>
                  <Typography color="text01" type="medium" variant="body2" className="pt-1">
                    20 Januari 2021
                  </Typography>
                </div>
              </div>
            </CardSimples>
            {/* comment doa */}
            <CardSimples
              bg="white"
              height="auto"
              width="auto"
              br="12px"
              className="mt-6 shadow-custom"
            >
              <Typography color="text01" variant="body1" type="medium">
                Doa dari Donatur
              </Typography>
              <div className="overflow-scroll">
                <div className="flex gap-x-4 pt-4">
                  <img src={iconProfile} alt="icon-profile" className="w-10 h-10" />
                  <div>
                    <Typography color="text01" type="normal" variant="body3">
                      Hamba Allah <span className="text-text03">20/01/2023 13:45</span>
                    </Typography>
                    <Typography color="primary-90" variant="body3">
                      Rp 1.000.000
                    </Typography>
                    <Typography color="text02" variant="body3">
                      Semoga berkah dan menjadi amal pahala
                    </Typography>
                  </div>
                </div>
                <hr className="my-3 border-t-0 bg-neutral-60 opacity-50 dark:opacity-50" />
              </div>
            </CardSimples>
          </div>
        </section>
        <section className="container_cardWakaf">
          <div className="flex items-center justify-between pb-6">
            <Typography color="text01" variant="body2" type="medium">
              Program Lainnya
            </Typography>
            <Typography className="cursor-pointer" color="btnColor" variant="body3">
              Lihat Lainnya
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            {wakaf?.slice(0, 3).map((item) => (
              <CardWakaf
                key={item.id}
                id_wakaf={item.id}
                img={item.picture}
                category={item.category}
                collected={item.collected}
                fundTarget={item.fund_target}
                title={item.title}
                due_date={item.due_date}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailWakaf;
