import React, { useContext } from "react";
import APIContext from "../../context/ContextApi";
import AgentCard from "./AgentCard";
import load from "../../assets/valorant_1.gif";


const AgentsGrid = () => {
  const { agents } = useContext(APIContext);
  if(!agents) return(<img src={load} alt="loading" className="w-[100%] scale-110" />)
  return (
    <div className="grid grid-cols-4 gap-4 justify-items-center  "> 
      {agents.map((agent, idx) => (
        <AgentCard agent={agent} key={idx} />
      ))}
    </div>
  );
};

export default AgentsGrid;
