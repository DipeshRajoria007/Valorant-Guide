import React from "react";
import Skin from "./Skin";
const SkinGrid = ({ skins }) => {
  return (
    <div className="grid grid-cols-2 gap-8 " >
      {skins&&skins.map((skin, uuid) => (
        <Skin key={uuid} skin={skin} className=" " />
      ))}
    </div>
  );
};

export default SkinGrid;
