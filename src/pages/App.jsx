import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CardCategory } from "../components/CustomCard";
function App() {
  return (
    <div className="App">
      <Header />
      <CardCategory />
      <Footer />
    </div>
  );
}

export default App;
