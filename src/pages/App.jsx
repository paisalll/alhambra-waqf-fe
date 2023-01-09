import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import education from "../assets/education.png";
import building from "../assets/building.png";
import health from "../assets/health.png";
import ribbon from "../assets/ribbon.png";
import { CardCategory, CardWakaf } from "../components/CustomCard";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex gap-3">
        {" "}
        <CardCategory text="Wakaf Pendidikan" icon={education} />
        <CardCategory text="Wakaf Bangunan" icon={building} />
      </div>

      <div className="grid lg:grid-cols-3 container gap-y-5 justify-center">
        <CardWakaf />
        <CardWakaf />
        <CardWakaf />
      </div>

      <Footer />
    </div>
  );
}

export default App;
