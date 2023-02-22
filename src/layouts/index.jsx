import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="w-full h-full overflow-hidden ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
