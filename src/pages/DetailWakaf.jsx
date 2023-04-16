import React, { useEffect, useState } from "react";
import { CardSimples } from "../components/Cards/Styled/index";
import { Progress } from "antd";
import Typography from "../components/Typography/Typography";
import { apiRequest } from "../api/apiRequest";
import { useParams } from "react-router-dom";
import { HOST } from "../strings/index";
import { useWakaf } from "../api/wakaf ";
import logoAlhambra from "../assets/logoAlhambra.png";
import iconProfile from "../assets/svg/ic-profil.svg";
import CardWakaf from "../components/Cards/CardWakaf";

const DetailWakaf = () => {
  const [detailWakaf, setDetailWakaf] = useState([]);
  const { wakaf, wakafErrorLoading } = useWakaf();
  const URL = HOST + "/wakaf/";
  const params = useParams();

  useEffect(() => {
    getDetailWakaf();
  }, []);
  const getDetailWakaf = async () => {
    const { id } = params;
    await apiRequest(URL + `${id}`, "get")
      .then((res) => {
        const results = res.data;
        setDetailWakaf(results);
        console.log(results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <section>
        <div className="w-full">
          <img
            src={
              detailWakaf?.picture ||
              "https://images.pexels.com/photos/8148443/pexels-photo-8148443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="wakaf"
            className="w-full h-[27rem] object-cover"
          />
        </div>

        <div className="container flex pb-[3rem] justify-between">
          <CardSimples
            bg="white"
            height="auto"
            width="62%"
            br="12px"
            className="flex items-center justify-center shadow-custom position-right"
          >
            <Typography
              className="leading-snug cursor-pointer multiline-ellipsis"
              type="semibold"
              color="navy"
              variant="body3"
            >
              {detailWakaf?.title}
            </Typography>
            <Typography variant="body2" color="text02" type="normal" className="my-3">
              Warga Palestina, Sheraze Aliya Gaza membagikan video progress pembangunan masjid
              tersebut lewat video yang diunggah di akun Instagramnya, @sheraze_aliya_gaza. Di video
              tersebut, terlihat bahwa progres pembangunan Masjid Syaikh Ajlin sudah memasuki tahap
              akhir. {detailWakaf?.detail}
              Warga Palestina, Sheraze Aliya Gaza membagikan video progress pembangunan masjid
              tersebut lewat video yang diunggah di akun Instagramnya, @sheraze_aliya_gaza. Di video
              tersebut, terlihat bahwa progres pembangunan Masjid Syaikh Ajlin sudah memasuki tahap
              akhir Warga Palestina, Sheraze Aliya Gaza membagikan video progress pembangunan masjid
              tersebut lewat video yang diunggah di akun Instagramnya, @sheraze_aliya_gaza. Di video
              tersebut, terlihat bahwa progres pembangunan Masjid Syaikh Ajlin sudah memasuki tahap
              akhir Warga Palestina, Sheraze Aliya Gaza membagikan video progress pembangunan masjid
              tersebut lewat video yang diunggah di akun Instagramnya, @sheraze_aliya_gaza. Di video
              tersebut, terlihat bahwa progres pembangunan Masjid Syaikh Ajlin sudah memasuki tahap
              akhir
            </Typography>
          </CardSimples>
          <div className="position-right">
            <CardSimples bg="white" height="auto" width="20rem" br="12px" className="shadow-custom">
              <Typography>{detailWakaf?.category}</Typography>
              <div className="flex justify-between">
                <Typography color="primary-90" type="normal" variant="body3">
                  Terkumpul
                </Typography>
                <Typography color="primary-60" type="normal" variant="body3">
                  Rp.{detailWakaf?.collected}
                </Typography>
              </div>
              <Progress percent={30} strokeColor={"#3862A5"} showInfo={false} />
            </CardSimples>

            <CardSimples
              bg="white"
              height="auto"
              width="20rem"
              br="12px"
              className="mt-6 shadow-custom"
            >
              <div className="flex gap-x-4">
                <img src={logoAlhambra} alt="logo-alhambra" className="h-12 w-12 " />
                <div>
                  <Typography color="text02" type="normal" variant="body3">
                    Penggalangan Wakaf Dimulai
                  </Typography>
                  <Typography color="text01" type="medium" variant="body3">
                    20 Januari 2021
                  </Typography>
                </div>
              </div>
            </CardSimples>
            {/* comment doa */}
            <CardSimples
              bg="white"
              height="auto"
              width="20rem"
              br="12px"
              className="mt-6 shadow-custom"
            >
              <Typography color="text01" variant="body1" type="medium">
                Doa dari Donatur
              </Typography>
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
            </CardSimples>
          </div>
        </div>
      </section>
      <section className="container pb-[4rem]">
        <div className="flex items-center justify-between pb-6">
          <Typography color="text01" variant="body2" type="medium">
            Program Lainnya
          </Typography>
          <Typography className="cursor-pointer" color="btnColor" variant="body3">
            Lihat Lainnya
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {wakaf?.slice(0, 3).map((item) => (
            <CardWakaf
              key={item.id}
              id={item.id}
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
    </>
  );
};

export default DetailWakaf;
