import React, { useContext, useEffect } from "react";
import AgentsGrid from "../components/AgentCard/AgentsGrid";
import APIContext from "../context/ContextApi";
import "./css/agents.css"


const Agents = () => {
  const { fetchAgents } = useContext(APIContext);
  useEffect(() => {
    fetchAgents();
  }, []);
  return (
    <div className=" py-24 px-48 flex items-center justify-items-center min-h-screen bg-lightRed relative ">
      <AgentsGrid className="absolute z-10 " />
      <p className=" design absolute right-0 text-[.75rem] z-0 font-akira text-dark tracking-[1rem] rotate-90 ">
          Valorant guide
        </p>
      <p className="design absolute -left-[40rem] text-[15rem] opacity-10 font-akira text-dark tracking-[1rem] -rotate-90 ">
          Agents
        </p>
    </div>
  );
};

export default Agents;
