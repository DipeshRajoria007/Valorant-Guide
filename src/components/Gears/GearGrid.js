import React, { useContext } from "react";
import APIContext from"../../context/ContextApi";
import GearCard from "./GearCard";
const GearGrid = () => {
  const { gears } = useContext(APIContext);
  return (
    <div  className="grid grid-cols-2 p-32 justify-items-center  " >{
            gears.map((gear,idx)=>(
                <GearCard gear={gear} key={idx} />
            ))
            
        }
    </div>
  );
};

export default GearGrid;
