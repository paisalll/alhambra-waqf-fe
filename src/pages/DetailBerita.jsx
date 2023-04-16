import React, { useEffect, useMemo, useState } from "react";
import Typography from "../components/Typography/Typography";
import { CardDisplayBerita } from "../components/Cards/CardDisplayBerita";
import useBeritaSingleById from "../api/beritaSingleById";
import useBerita from "../api/berita";
import { apiRequest } from "../api/apiRequest";
import { useParams } from "react-router-dom";
import { HOST } from "../strings";

export default function DetailBerita() {
  const URL = HOST + "/news/";
  const params = useParams();
  const [detailBerita, setDetailBerita] = useState([]);
  const { berita, beritaErrorLoading } = useBerita();
  // const { data: beritaSingle, loading: beritaSingleLoading } = useBeritaSingleById(currentId);

  useEffect(() => {
    getDetailBerita();
  }, []);
  const getDetailBerita = () => {
    const { id_news } = params;
    apiRequest(URL + `${id_news}`, "get")
      .then((res) => {
        const results = res.data;
        setDetailBerita(results);
        console.log(results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container pt-[8rem] pb-[5rem]">
      <div className="w-full">
        <img
          src="https://i0.wp.com/konsultasisyariah.com/wp-content/uploads/2017/02/tanah-wakaf-masjid.jpg"
          alt="berita"
          className="w-full h-[25rem] object-cover rounded-[5px]"
        />
      </div>

      <article className="pt-6">
        <Typography variant="h3" type="medium" color="navy">
          {detailBerita.title}
        </Typography>
        <div className="flex gap-3 pt-6">
          <Typography type="normal" variant="body3" color="neutral-80">
            by <span className="text-text01">Al-Hambra</span>
          </Typography>
          <Typography type="normal" variant="body3" color="neutral-80">
            |
          </Typography>
          <Typography type="normal" variant="body3" color="neutral-80">
            {detailBerita?.created_at}
          </Typography>
        </div>
        <div className="pt-6 text-justify">
          <Typography variant="body2" color="text02" type="normal" className="my-3">
            <span className="text-text01">Berita Wakaf </span>- Warga Palestina, Sheraze Aliya Gaza
            membagikan video progress pembangunan masjid tersebut lewat video yang diunggah di akun
            Instagramnya, @sheraze_aliya_gaza. Di video tersebut, terlihat bahwa progres pembangunan
            Masjid Syaikh Ajlin sudah memasuki tahap akhir. Sheraze pun berterima kasih pada rakyat
            Indonesia yang sudah mewujudkan pembangunan masjid tersebut dan Ridwan Kamil yang
            merancangnya.
          </Typography>
          <Typography variant="body2" color="text02" type="normal" className="my-3 ">
            {detailBerita?.body}
          </Typography>
          <Typography variant="body2" color="text02" type="normal" className="my-3">
            Keberadaan Masjid Syaikh Ajlin merupakan hal yang sangat berharga bagi warga Gaza
            setelah masjid sebelumnya hancur karena serangan tentara Israel pada 2014 lalu.
            Dirancang khusus oleh Ridwan Kamil, desain masjid tersebut menggabungkan bentuk bangunan
            modern dan simbol nilai-nilai Islam. Aman Palestin sendiri meminta rancangan masjid
            tersebut sejak Ridwan Kamil menjabat Wali Kota Bandung. Ridwan Kamil yang memang sudah
            terbiasa merancang masjid mengakui bahwa merancang Masjid Syaikh Ajlin bukan perkara
            mudah. Pasalnya, dia juga harus berjuang dengan urusan emosional karena pembangunan
            masjid ini bisa menjadi sejarah baru bagi hubungan Indonesia-Palestina.
          </Typography>
          <Typography variant="body2" color="text02" type="normal" className="my-3">
            "Kalau masjid ini selesai, harapan warga Gaza bisa beribadah kembali dengan nyaman
            terwujud lewat pembangunan Masjid Syaikh Ajlin. Saya titip atas nama kemanusian dan
            ukhuwah Islamiyah, kita bantu sedekah infak langsung dan digital untuk menggenapkan
            kemulian seluruh pembangunan ini," kata Kang Emil.
          </Typography>
        </div>
      </article>
      <section className="pt-20">
        <Typography type="normal" variant="h4" color="navy">
          Berita Lainnya
        </Typography>
        <div className="pt-6 grid grid-cols-3 gap-8">
          {berita?.slice(0, 3).map((item) => (
            <CardDisplayBerita
              key={item.id_news}
              id={item.id_news}
              title={item.title}
              picture={item.picture}
              updated_at={item.updated_at}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
