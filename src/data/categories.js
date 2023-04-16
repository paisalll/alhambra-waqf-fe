import React, { useState } from "react";
import education from "../assets/education.png";
import building from "../assets/building.png";
import health from "../assets/health.png";
import ribbon from "../assets/ribbon.png";
// import { ReactComponent as ribbon } from "../assets/ribbon.png";
const category = [
  {
    id: 1,
    title: "Wakaf Pendidikan",
    icon: "../assets/education.png",
    categories: education,
  },
  {
    id: 2,
    title: "Wakaf Bangunan",
    icon: "../assets/building.png",
    categories: building,
  },
  {
    id: 3,
    title: "Wakaf Kesehatan",
    icon: "../assets/health.png",
    categories: health,
  },
  {
    id: 4,
    title: "Wakaf Umum",
    icon: "../assets/ribbon.png",
    categories: ribbon,
  },
];
export default category;
