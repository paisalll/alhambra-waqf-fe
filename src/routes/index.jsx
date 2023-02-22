import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages/Home";
import Kategori from "../pages/Kategori";
import BeritaWakaf from "../pages/BeritaWakaf";
import PembayaranWakaf from "../pages/PembayaranWakaf";
import DetailBerita from "../pages/DetailBerita";
const index = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kategori-wakaf" element={<Kategori />} />
          <Route path="/berita-wakaf" element={<DetailBerita />} />
          <Route path="/pembayaran-wakaf" element={<PembayaranWakaf />} />
          {/* <Route path="/berita-wakaf/" element={<DetailBerita />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default index;
