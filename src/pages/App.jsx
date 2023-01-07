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
      <CardCategory text="Wakaf Pendidikan" icon={education} />
      <CardCategory text="Wakaf Bangunan" icon={building} />
      <CardWakaf />
      <Footer />
    </div>
  );
}

export default App;
