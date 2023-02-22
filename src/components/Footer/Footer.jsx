import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-90">
      <div className="container py-7 ">
        <h1 className="text-2xl font-semibold text-white">Wakaf Al-Hambra</h1>
        <div className=" md:flex justify-between pt-5">
          <div className="pb-8 md:w-[35%] lg:w-[40%] text-sm font-light text-white">
            <p>
              Wakaf Al-Azhar adalah Pengelola Wakaf yang dibentuk oleh Yayasan
              Pesantren Islam (YPI) Al-Azhar untuk mengembangkan serta mengelola
              wakaf produktif dalam mendukung aktiftas pendidikan dan dakwah.
              Kunjungi Website Kami http://wakafalazhar.com/
            </p>
          </div>
          <div className="md:w-[30%] lg:w-[30%] md:pl-4 text-sm font-light text-white ">
            <p>
              Layanan Wakaf: Senin - Jumat <br />
              08.30 - 16.30
            </p>
            <p className="py-3 lg:py-5">
              Komplek Masjid Agung Al Azhar Jl. Sisingamangaraja Selong,
              Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12110
            </p>
            <p>021 7261233 Ext 253</p>
          </div>
          <div className="pt-5 md:w-[30%] lg:w-[20%] text-end flex gap-2 ">
            <button className="rounded-full bg-slate-50 h-9 w-9 border-none items-center ">
              <FaFacebookF className="text-blue-700 h-5 w-9" />
            </button>
            <button className="rounded-full bg-slate-50 h-9 w-9 border-none items-center">
              <FaTwitter className="text-blue-900 h-5 w-9" />
            </button>
            <button className="rounded-full bg-slate-50 h-9 w-9 border-none items-center ">
              <FaYoutube className="text-red-800 h-5 w-9" />
            </button>
            <button className="rounded-full bg-slate-50 h-9 w-9  border-none items-center">
              <FaTiktok className="text-black h-5 w-9" />
            </button>
            <button className="rounded-full bg-slate-50 h-9 w-9 border-none items-center">
              <FaInstagram className="text-pink-800 h-5 w-9" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
