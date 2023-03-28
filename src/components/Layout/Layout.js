import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        // height: "100vh",
        // width: "100vw",
      }}
    >
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
