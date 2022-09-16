import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Agents from "./Pages/Agents"
import Gears from "./Pages/Gears"
import Maps from "./Pages/Maps"
import Weapons from "./Pages/Weapons"
import AgentInfoCard from "./components/AgentCard/AgentInfoCard";
import WeaponInfoCard from "./components/Weapon/WeaponInfoCard";
import SkinInfo from "./components/Weapon/skins/SkinInfo";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agents" element={<Agents/>} />
        <Route path="/Gears" element={<Gears/>} />
        <Route path="/Maps" element={<Maps/>} />
        <Route path="/Weapons" element={<Weapons/>} />
        <Route path='/agents/detail/:uuid' element={<AgentInfoCard />} />
        <Route path='/:displayName/detail/:uuid' element={<WeaponInfoCard />} />
        <Route path='/:displayName/:uuid' element={<SkinInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




