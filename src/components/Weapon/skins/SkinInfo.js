import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import axios from "axios";
const SkinInfo = () => {
  const { uuid } = useParams();
  const baseUrl = `https://valorant-api.com/v1/weapons/skins/`;
  const [skin, setSkin] = useState({});
  console.log(uuid);
  const fetchSkin = async (uuid) => {
    const res = await axios.get(`${baseUrl}${uuid}`);
    setSkin(res.data.data);
  };
  useEffect(() => {
    fetchSkin(uuid);
    console.log(skin);
  }, []);
  console.log(skin.levels);
  return (
    <div className="bg-lightRed min-h-screen flex flex-col p-10 items-center font-din uppercase tracking-tight text-dark ">
      <h1 className="text-5xl">{skin.displayName}</h1>
      <div className="bg-darkRed p-10 m-5">
        <img src={skin.displayIcon} />
      </div>
      {skin.chromas && skin.chromas.length > 1 ? (
        <div>
          <h1 className="text-5xl"> All Different Chromas Available </h1>
          <div className="flex flex-wrap gap-8 justify-center mt-10 ">
            {skin.chromas &&
              skin.chromas?.map((chroma, uuid) => (
                <div key={uuid} className="w-[35rem] bg-darkRed p-4 ">
                  <h1 className="">{chroma.displayName}</h1>
                  <img src={chroma.fullRender} className="m-4" />
                </div>
              ))}
          </div>
        </div>
      ) : (
        <span>No Chromas Available :(</span>
      )}
      {skin.levels && skin.levels.length > 1 ? (
        <div>
          <h1 className="text-5xl"> Different Levels </h1>
          <div className="flex flex-wrap gap-8 justify-center mt-10">
            {skin.levels &&
              skin.levels?.map((level, uuid) => (
                <div key={uuid} className=" bg-darkRed p-4 ">
                  <h1 className="text-2xl mb-2">{level.displayName}</h1>
                  <ReactPlayer url={level.streamedVideo} controls={true} />
                </div>
              ))}
          </div>
        </div>
      ):(<span>Only one Level is Available :(</span>)}
    </div>
  );
};

export default SkinInfo;
