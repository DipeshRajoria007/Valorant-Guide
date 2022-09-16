import React from "react";
import { Link } from "react-router-dom";

const AgentCard = ({ agent }) => {
  // console.log(agent.uuid);
  return (
    <Link
      to={`/agents/detail/${agent.uuid}`}
      className="mb-14 flex justify-center w-3/4 hover:drop-shadow-2xl hover:scale-105 duration-500 
       "
    >
      <div className="flex flex-col bg-dark items-center p-8 ">
        <h1 className="text-white font-akira text-xl tracking-widest  ">
          {agent.displayName}
        </h1>
        <div className="h-48 mt-6 flex items-center justify-around ">
          <img
            src={agent.displayIcon}
            alt={agent.displayName}
            className="rounded-full items-center hover:bg-darkRed bg-lightRed w-[90%] "
          />
        </div>
      </div>
    </Link>
  );
};

export default AgentCard;
