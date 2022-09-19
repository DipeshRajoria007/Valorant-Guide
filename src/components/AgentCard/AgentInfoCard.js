import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import load from "./../../assets/valorant_1.gif";

const baseUrl = `https://valorant-api.com/v1`;
const AgentInfoCard = () => {
  const [agent, setAgent] = useState({});
  const [loading, setLoading] = useState(true);
  const [audio] = useState(new Audio());

  const { uuid } = useParams();
  const fetchAgent = async (uuid) => {
    const res = await axios.get(`${baseUrl}/agents/${uuid}?language=en-US`);
    setAgent(res.data.data);
    audio.src = res.data.data.voiceLine.mediaList[0].wave;

    setLoading(false);
  };
  useEffect(() => {
    fetchAgent(uuid);
  }, []);
  if (loading)
    return <img src={load} alt="loading" className="w-[100%] scale-110" />;

  return (
    <div className=" grid grid-cols-3 px-10 bg-darkRed  ">
      <div className=" relative overflow-hidden ">
        <img
          src={agent.background}
          className=" opacity-40 drop-shadow-xl -translate-y-24  "
        />
        <div className="pl-36 pt-40 absolute top-0 z-1 h-[80rem] w-[35rem] bg-cover hover:scale-105 hover:drop-shadow-sm duration-500 ">
          <img src={agent.fullPortrait} className=" p-5 bg-cover scale-[220%] " />
        </div>
      </div>
      <div className="col-span-2" >
        <div className="  p-10 font-valorant  text-white bg-dark mt-[4rem]">
          <div className="flex justify-between items-center ">
            <div className="text-6xl ">{agent.displayName}</div>
            <button
              className="bg-lightRed h-10 w-32 shadow-lg shadow-red-500/50 hover:tracking-wider duration-500 "
              onClick={() => audio.play()}
            >
              Sound
            </button>
          </div>
          <div className="ROLE">
            <h1 className="text-lg  ">//ROLE</h1>
            <div className="flex items-center text-center justify-between content-center py-2 ">
              <h1 className="text-3xl items-center text-center justify-center  ">{agent.role.displayName}</h1>
              <img src={agent.role.displayIcon} className="h-10" />
            </div>
            <div>
              <p className="  capitalize tracking-wide text-sm font-semibold font-[poppins] ">
                {agent.description}
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            {agent.abilities.map((ability) => {
              return (
                <div className=" max-w-[25%] " key={ability.displayName}>
                  {ability.displayIcon ? (
                    <img
                      src={ability.displayIcon}
                      alt={ability.displayName}
                      width="60px"
                    />
                  ) : (
                    <span></span>
                  )}
                  <div className=" mt-4">
                    <strong>{ability.displayName}</strong>
                    <p className="font-poppins text-sm ">
                      {ability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentInfoCard;
