import education from "../assets/education.png";
import building from "../assets/building.png";
import health from "../assets/health.png";
import ribbon from "../assets/ribbon.png";
import jmlProgram from "../assets/svg/Product.svg";
import totalwakaf from "../assets/svg/Investing.svg";
import investing from "../assets/svg/Ecology.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import CardBeritaHome from "../components/Cards/CardBeritaHome";
import CardCategory from "../components/Cards/CardCategory";
import CardWakaf from "../components/Cards/CardWakaf";
import CustomButton from "../components/Button";
import Player from "../components/VideoPlayer/Player";
import Typography from "../components/Typography/Typography";
import { useWakaf } from "../api/wakaf";
import useBerita from "../api/berita";
import CardIcon from "../components/Cards/CardIcon";
import { CarouselGambar } from "../components/Carousel/Carousel";
import { MitraWakaf } from "../components/Carousel/MitraWakaf";
import useSummary from "../api/summary";

const Home = () => {
  const { wakaf, wakafErrorLoading } = useWakaf();
  const { berita, beritaErrorLoading } = useBerita();
  const { data: summaryWakaf } = useSummary();
  return (
    <>
      <section className="bg-whiteBg pt-[8rem] pb-[5rem] ">
        <div className=" container">
          <div className=" md:flex ">
            <div className="md:w-[55%] ">
              <Typography variant="h2" type="bold" color="primary-90">
                Mari Berlomba dan Ayo Berwakaf
              </Typography>
              <Typography className="py-8 " variant="body3" color="neutral-90">
                Berbagi kepada sesama memberi jiwa rasa damai. Berbagi dengan tulus tanpa pamrih
                memberikan perasaan suka cita. ayo berwakaf bersama kami
              </Typography>
              <Link to={"/kategori-wakaf"}>
                <CustomButton color="Primary" label="Mulai Berwakaf" />
              </Link>
            </div>
            <div className="md:w-[45%] pl-4 ">
              <CarouselGambar />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[4rem]">
        <div className=" container">
          <div className="md:flex ">
            <div className="md:w-[58%] flex ">
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                <CardCategory text="Wakaf Pendidikan" icon={education} />
                <CardCategory text="Wakaf Bangunan" icon={building} />
                <CardCategory text="Wakaf Kesehatan" icon={health} />
                <CardCategory text="Wakaf Umum" icon={ribbon} />
              </div>
            </div>
            <div className="md:w-[42%] ">
              <div className="py-[4rem]">
                <Typography color="btnColor">Kategori</Typography>
                <Typography className="pt-9" variant="h2" color="primary-90" type="bold">
                  Beberapa Program Wakaf kami untuk anda
                </Typography>
                <Typography className="pt-8 md:pt-10" variant="body3" color="neutral-90">
                  Kami memiliki beberapa kategori wakaf yang memambantu anda untuk menyalurkan wakaf
                  anda
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-whiteBg py-[4rem]">
        <div className="container">
          <div className="text-center pb-8">
            <Typography variant="h3" color="navy" type="bold">
              Ayo Mulai Berwakaf
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-7">
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
          <div className="flex justify-center pt-4">
            <Link to={"/kategori-wakaf"} className="no-underline">
              <Typography className="flex items-center text-center cursor-pointer" color="btnColor">
                Lihat Lainnya
                <IoIosArrowRoundForward size={30} className="pl-1" />
              </Typography>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-whiteBg">
        <div className="container">
          <Player />
        </div>
      </section>
      <section className="bg-whiteBg ">
        <div className="container">
          <div className="text-center pbs-9">
            <Typography variant="h3" color="navy" type="bold">
              Berita Wakaf
            </Typography>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {berita?.slice(0, 2).map((item) => (
              <CardBeritaHome
                key={item.id_news}
                id_news={item.id_news}
                title={item.title}
                body={item.body}
                picture={item.picture}
                updated_at={item.updated_at}
              />
            ))}
          </div>
          <div className=" flex justify-center py-7">
            <Link to={"/berita-wakaf"} className="no-underline">
              <Typography className="flex items-center text-center cursor-pointer" color="btnColor">
                Lihat Lainnya
                <IoIosArrowRoundForward size={30} className="pl-2" />
              </Typography>
            </Link>
          </div>
        </div>
      </section>
      <section className="container flex py-[6rem] items-center justify-evenly">
        <CardIcon icon={jmlProgram} text="Jumlah Program" jumlah={summaryWakaf?.total_program} />
        <CardIcon icon={totalwakaf} text="Total Wakaf" jumlah={`Rp.${summaryWakaf?.total_wakaf}`} />
        <CardIcon icon={investing} text="Jumlah Wakif" jumlah={summaryWakaf?.total_wakif} />
      </section>

      <section className="bg-whiteBg py-[6rem] ">
        <div className="container">
          <div className="text-center pb-9">
            <Typography variant="h3" color="navy" type="bold">
              Mitra Wakaf Al Hambra
            </Typography>
          </div>
          <MitraWakaf />
        </div>
      </section>
    </>
  );
};

export default Home;
