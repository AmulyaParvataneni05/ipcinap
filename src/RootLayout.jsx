import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useHeaderFooter } from "./HeaderFooterContext";
import IPCLogo from '../Photos/IPC_Logo1.png'
import './index.css'
function RootLayout() {
  const { isHeaderFooterVisible } = useHeaderFooter();
  return (
    <div className="page">
      {isHeaderFooterVisible && <Header />}
      {!isHeaderFooterVisible && (
        <div className="header-image-container">
          <img
            src={IPCLogo}
            alt="Header Image"
            className="subpage-ipc-logo"
          />
        </div>
      )}

      <div style={{ minHeight: "100vh" ,padding:"0px 0px"}}>
        <Outlet />
      </div>
      {isHeaderFooterVisible && <Footer />}
    </div>
  );
}

export default RootLayout;
