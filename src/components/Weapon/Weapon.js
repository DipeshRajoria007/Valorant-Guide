import React from "react";
import {Link} from "react-router-dom"
const Weapon = ({ weapon }) => {
  return (
    <Link to={`/${weapon.displayName}/detail/${weapon.uuid}`} className="flex flex-col p-6 bg-darkRed w-96 hover:drop-shadow-xl duration-500 cursor-pointer  ">
      <div className="info flex align-center font-din uppercase font-bold   text-dark  tracking-tighter text-3xl ">
        <h1>{weapon.displayName}.</h1>
      </div>
      <div>
        <img
          src={weapon.displayIcon}
          className="drop-shadow-hard hover:drop-shadow-far duration-500 max-w-[18rem] m-2 "
        />
      </div>
    </Link>
  );
};

export default Weapon;
