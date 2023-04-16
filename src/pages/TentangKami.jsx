import Typography from "../components/Typography/Typography";
import React from "react";

const TentangKami = () => {
  return (
    <section className="pt-[8rem] pb-[5rem] bg-white">
      <article className="text-justify container">
        <Typography variant="h2" type="bold" color="primary-90">
          Tentang Kami
        </Typography>
        <Typography
          variant="h3"
          color="primary-90"
          type="semibold"
          className="pt-4"
        >
          Sejarah dan Informasi Yayasan
        </Typography>
        <Typography
          variant="body2"
          color="text02"
          type="normal"
          className="pt-4"
        >
          Yayasan Pendidikan dan Sosial Al Hambra didirikan oleh Bapak Andi
          Parewangi dan Ibu Sitti Rafiah berdasarkan Akta Notaris No.38 pada
          tanggal 29 Desember 1990 di Kota Makassar. Al Hambra berdiri dari
          kesadaran akan pentingnya pengembangan Pendidikan Berkarakter untuk
          generasi penerus serta Kepedulian akan Lingkungan & Sosial
          disekeliling. Pengembangan Pendidikan dan peningkatan Kepedulian
          Lingkungan & Sosial membutuhkan uluran tangan dari Ummat, tidak hanya
          menjadi tanggung jawab Pemerintah.
        </Typography>
        <Typography
          variant="body2"
          color="text02"
          type="normal"
          className="pt-4"
        >
          Sejatinya Al Hambra adalah milik umat islam bangsa Indonesia dan umat
          bangsa lain di dunia, timbul dari umat, oleh umat, dan diperuntukkan
          bagi umat
        </Typography>
        <Typography
          variant="body2"
          color="text02"
          type="normal"
          className="pt-4"
        >
          Al Hambra memulai ikhtiar nya dengan mendirikan GAMACollege pada tahun
          1990 yang membimbing siswa-siswi untuk mengeluarkan potensi dan
          capaian prestasi maksimal yang dapat diraih. Terbukti selama lebih
          dari 30 Tahun sejak didirikan, GAMACollege telah melahirkan lebih dari
          100.000 Dokter Berkarakter, Engineer Berkarakter, Arsitek Berkarakter,
          Desainer Berkarakter, Seniman Berkarakter, dan lain sebagainya.
        </Typography>
        <Typography
          variant="body2"
          color="text02"
          type="normal"
          className="pt-4"
        >
          Di Tahun 2005, Yayasan Pendidikan dan Kesehatan Al Hambra melanjutkan
          ikhtiar selanjutnya dengan mendirikan Akademi Keperawatan Al Hambra.
          Berfokus pada pendalaman keilmuan Kesehatan dan penanaman karakter
          yang kuat, Akper Al Hambra berhasil melahirkan tenaga perawat handal
          yang saat ini bertugas tersebar di Rumah Sakit Pemerintah maupun
          Swasta.
        </Typography>
        <Typography
          variant="body2"
          color="text02"
          type="normal"
          className="pt-4"
        >
          Wakaf Al hambra merupakan lembaga nonprofit Islami dan pengelola wakaf
          yang dibentuk oleh Yayasan Pendidikan dan Sosial Al Hambra, yang
          berdedikasi secara produktif dalam mengemban amanah utama sebagai
          nazhir atau pengelola wakaf umat untuk menopang kemajuan peradaban
          melalui kegiatan-kegiatan filantropis.
        </Typography>
        <Typography
          variant="body2"
          color="text02"
          type="normal"
          className="pt-4"
        >
          Secara historis, Wakaf Alhambra lahir prematur dengan fungsi sebagai
          pengelolaan zakat, infak, sedekah dan wakaf yang berlangsung di
          Yayasan Pendidikan dan Sosial Al Hambra. Untuk menjaga transparansi,
          akuntabilitas serta kepercayaan Ummat, sejak tahun 2020 Wakaf Al
          Hambra mulai dibentuk secara mandiri.
        </Typography>
        <Typography
          variant="h3"
          color="primary-90"
          type="semibold"
          className="pt-6"
        >
          Visi dan Misi
        </Typography>
        <Typography variant="h4" color="primary-90" className="pt-4">
          visi
        </Typography>
        <Typography
          variant="body2"
          color="text02"
          type="normal"
          className="pt-4"
        >
          Menjadi lembaga pengelola wakaf yang mendorong kemajuan peradaban bagi
          umat.
        </Typography>
        <Typography variant="h4" color="primary-90" className="pt-4">
          Misi
        </Typography>
        <ol className="pl-[1rem] pt-4 text-text02 ">
          <li>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            luctus ridiculus nibh odio tempus aliquet praesent sed. Quam vel sit
            euismod in tortor tortor lorem.
          </li>
          <li>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            luctus ridiculus nibh odio tempus aliquet praesent sed. Quam vel sit
            euismod in tortor tortor lorem.
          </li>
        </ol>
        <Typography
          variant="h3"
          color="primary-90"
          type="semibold"
          className="pt-6"
        >
          Pengurus Wakaf
        </Typography>
        <Typography variant="h5" color="text01" type="medium" className="pt-4">
          Struktur Pengelola
        </Typography>
        <div className="pt-4">
          <Typography variant="body1" color="text02" type="medium">
            PEMBINA YAYASAN
          </Typography>
          <Typography color="text02" variant="body2">
            Ketua Pembina : Drs. H. Andi Parewangi.
          </Typography>
        </div>
        <div className="pt-4">
          <Typography variant="body1" color="text02" type="medium">
            PENGURUS YAYASAN
          </Typography>
          <Typography color="text02" variant="body2">
            Ketua Umum : Andi Muhammad Iqbal Parewangi. <br />
            Sekretaris Umum : Andi Muhammad Shaifullah. <br />
            Bendahara Umum : Dr. Andi Muhammad Luthfi Parewangi.
          </Typography>
        </div>
        <div className="pt-4">
          <Typography variant="body1" color="text02" type="medium">
            PENGAWAS YAYASAN
          </Typography>
          <Typography color="text02" variant="body2">
            Ketua Pengawas : Hj. Sitti Rafiah, BA.
          </Typography>
        </div>
      </article>
    </section>
  );
};
export default TentangKami;
