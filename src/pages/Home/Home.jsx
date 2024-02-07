import React from "react";
import "./Home.css"
import { Footer, Header } from "..";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
