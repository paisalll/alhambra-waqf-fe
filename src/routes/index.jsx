import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages";
import Kategori from "../pages/Kategori";
import BeritaWakaf from "../pages/BeritaWakaf";
import PembayaranWakaf from "../pages/PembayaranWakaf";
import DetailBerita from "../pages/DetailBerita";
import TentangKami from "../pages/TentangKami";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import DetailWakaf from "../pages/DetailWakaf";
import AssetWakaf from "../pages/AssetWakaf";
import ScrollToTop from "../helpers/onChangeRoutes.js";

const index = () => {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pembayaran-wakaf" element={<PembayaranWakaf />} />
            <Route path="/tentang-alhambra" element={<TentangKami />} />
            <Route path="/berita-wakaf" element={<BeritaWakaf />} />
            <Route path="/berita-wakaf/:id_news" element={<DetailBerita />} />
            <Route path="/kategori-wakaf" element={<Kategori />} />
            <Route path="/kategori-wakaf/:id_wakaf" element={<DetailWakaf />} />
            <Route path="/asset-wakaf" element={<AssetWakaf />} />
          </Routes>
        </Layout>
      </QueryParamProvider>
    </BrowserRouter>
  );
};

export default index;
