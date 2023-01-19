import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Kategori from "../pages/Kategori";
const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kategori_wakaf" element={<Kategori />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
