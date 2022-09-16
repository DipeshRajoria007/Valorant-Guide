import React, { useEffect, useContext } from "react";
import APIContext from "../context/ContextApi";
import "./css/maps.css"
import MapCarousel from "../components/Maps/MapCarousel";

const Maps = () => {
  const { fetchMaps } = useContext(APIContext);
  useEffect(() => {
    fetchMaps();
  }, []);
  return (
    <div className="bg-lightRed relative ">
      <h1 className=" design absolute drop-shadow-lg py-[3rem] px-[12rem] z-10 text-[10rem] font-bold text-white font-akira">
        Maps
      </h1>
      <h1 className=" absolute drop-shadow-lg left-[-14rem] top-[25rem] z-5 text-[10rem] font-bold opacity-10 -rotate-90 text-dark font-valorant">
        valorant
      </h1>
      <MapCarousel />
    </div>
  );
};

export default Maps;
