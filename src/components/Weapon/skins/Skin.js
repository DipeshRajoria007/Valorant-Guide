import React from "react";
import { Link } from "react-router-dom";
const Skin = ({ skin }) => {
  return (
    <Link
      to={`/${skin.displayName}/${skin.uuid}`}
      className="bg-darkRed p-10 flex flex-col text-dark hover:drop-shadow-xl "
    >
      <div className="justify-self-start text-2xl ">{skin.displayName}</div>
      <div className="p-10">
        {skin.displayIcon ? (
          <img
            src={skin.displayIcon}
            className="hover:scale-105 hover:drop-shadow-hard duration-500 "
          />
        ) : (
          <h1 className="text-center ">No Preview available</h1>
        )}
      </div>
    </Link>
  );
};

export default Skin;
