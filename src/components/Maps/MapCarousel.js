import React, { useContext } from "react";
import Loading from "../Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Map from "./Map";
import APIContext from "../../context/ContextApi";

import load from "../../assets/valorant_1.gif";

const MapCarousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { maps } = useContext(APIContext);
  //   console.log(maps);
  if(!maps) return(<img src={load} alt="loading" className="w-[100%] scale-110" />)
  return (
    <div className="" >
      <Slider className="" {...settings} >
        {maps.map((map, idx) => (
            <Map  map={map} key={idx}  />
        ))}
      </Slider>
    </div>
  );
};

export default MapCarousel;
