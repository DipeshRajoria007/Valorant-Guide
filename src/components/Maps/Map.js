import React from "react";
import Table from "./Table/Table";
import "./Map.css";

const Map = ({ map }) => {
  // console.log(map.callouts[0].regionName);
  return (
    <div className="px-2">
      <div className=" drop-shadow-xl relative h-[100vh] flex items-center justify-center content-center align-center ">
        <img className="h-[30rem] hover:drop-shadow-2xl " src={map.splash} />
        <p className=" absolute right-0 text-[.75rem] font-akira text-dark tracking-[1rem] rotate-90 ">
          {map.coordinates}
        </p>
        <h1 className=" absolute drop-shadow-lg bottom-24 right-28 z-10 text-[8rem] font-bold text-white font-valorant">
          {map.displayName}
        </h1>
      </div>
      {map.displayIcon ? (
        <div className="grid grid-cols-3 mx-12 drop-shadow-xl ">
          <img src={map.displayIcon} className="bg-darkRed h-[100%] object-contain p-10" />
          <div className="bg-dark col-span-2 p-10 overflow-hidden">
            <h1 className="text-white font-valorant  text-xl tracking-wider font-bold ">
              Famous CallOuts - {map.displayName}
            </h1>
            <div className="text-white ">
              {map.callouts ? (
                <Table data={map.callouts} className="" />
              ) : (
                <span></span>
              )}
            </div>  
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Map;
