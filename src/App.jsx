import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import {
  Aksiya,
  Error,
  Haqqimizda,
  Imax,
  Kinoteatr,
  Laser,
  Vip,
} from "./components";
import HomeHead from "./components/HomeHead/HomeHead";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<HomeHead />} />
          <Route path="kinoteatrlar" element={<Kinoteatr />} />
          <Route path="imax" element={<Imax />} />
          <Route path="laser" element={<Laser />} />
          <Route path="vip" element={<Vip />} />
          <Route path="aksiyalar" element={<Aksiya />} />
          <Route path="haqqimizda/:id" element={<Haqqimizda />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
