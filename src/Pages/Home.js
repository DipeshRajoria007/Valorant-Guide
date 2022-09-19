import React from "react";
import "./css/Home.css";
import Hero from "../assets/Raze.png";
import HomeGrid from "../components/Home/HomeGrid";
import IMG from "../assets/esport.jpg";
import VLT from "../assets/vlt.png";
import ENG from "../assets/enigma.png";
import ORG from "../assets/Orangutan.png";
import RVT from "../assets/Revenant.png";
import GLB from "../assets/global.png";

import APEX from "../assets/apex.jpg";
import DOTA from "../assets/dota.jpg";
import CSGO from "../assets/csgo.jpg";
import FORTNITE from "../assets/fortnite.jpg";

import {
  faUserCircle,
  faShield,
  faGun,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiCool } from "react-icons/bi";

const games = [
  {
    id: "1",
    name: "Apex Legends",
    img: APEX,
  },
  {
    id: "2",
    name: "Dota 2",
    img: DOTA,
  },
  {
    id: "3",
    name: "CS-GO",
    img: CSGO,
  },
  {
    id: "4",
    name: "Fortnite",
    img: FORTNITE,
  },
];

const Home = () => {
  const CARD_DATA = [
    {
      title: "Agents",
      icon: faUserCircle,
      details:
        "It shows playable agents in Valorant. Apart from that, it is also covered agents' technical specifications, roles, skills and sounds they make in the game",
      color: "#e75d5d",
    },
    {
      title: "Gears ",
      icon: faShield,
      details:
        "It gives an information about the armors used in the Valorant. The information have gear's name, description, price, category and category description.",
      color: "#e75d5d",
    },
    {
      title: "Maps",
      icon: faMap,
      details:
        "It gives an information about the maps used in the Valorant.These maps are shown in carousel",
      color: "#e75d5d",
    },
    {
      title: "Weapons",
      icon: faGun,
      details:
        "It also shows the injury information on the body about the purchased weapons sold in the Valorant except for its technical features",
      color: "#e75d5d",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 bg-lightRed relative overflow-hidden">
        <div className="absolute font-din text-7xl text-dark rotate-90 font-black top-20 -right-[20rem] opacity-5 tracking-tighter ">
          VALORANT GUIDE
        </div>
        <div className=" m-16">
          <div className="duration-500">
            <HomeGrid data={CARD_DATA} />
          </div>
        </div>
        <div className="relative">
          <img
            src={Hero}
            className=" absolute z-10 top-24 right-72  h-[80%] hover:scale-110 duration-500 "
          />
          <div className=" absolute right-80  top-[80px]  font-akira  ">
            {[...Array(7)].map((i,index) => (
              <h1
                key={index}
                className=" leading-[5.5rem] drop-shadow-xl text-7xl text-lightRed "
              >
                RAZE
              </h1>
            ))}
          </div>
        </div>
        <section className="relative bg-dark w-screen h-[30rem] text-white font-valorant items-center text-center font-bold uppercase  leading-none tracking-tighter">
          <div className="text-5xl top-[50%] left-[20%] absolute z-10">
            Want to enter in the competitive <br />
            scene of Valorant?
            <div className="text-2xl text-lightRed font-din items-center tracking-wider">
              Follow Our Guide and get better
            </div>
          </div>
          <div className="absolute w-[100vw] h-[100vh] bg-gradient-to-t from-dark to-transparent  top-0"></div>
          <img src={IMG} className="w-[100%]  " />
        </section>
      </div>

      {/* patners section */}

      <section className="bg-lightRed grid grid-col-2 text-center items-center  justify-items-center min-h-[22rem] pb-10  ">
        <h1 className="font-din text-5xl text-dark uppercase ">
          Our Partners.
        </h1>
        <div className="flex w-4/6 justify-center items-center align-center gap-4 ">
          <div className="hover:bg-darkRed hover:scale-105 hover:drop-shadow-xl bg-lightRed duration-500 p-4 border-solid border-2 border-darkRed min-w-[15rem] h-[10rem] flex justify-center items-center ">
            <img src={VLT} className="w-[6rem]  " />
          </div>
          <div className="hover:bg-darkRed hover:scale-105  hover:drop-shadow-xl bg-lightRed duration-500 p-4 border-solid border-2 border-darkRed min-w-[15rem] h-[10rem] flex justify-center items-center ">
            <img src={ENG} className="w-[6rem]  " />
          </div>
          <div className=" hover:bg-darkRed hover:scale-105 hover:drop-shadow-xl bg-lightRed duration-500 p-4 border-solid border-2 border-darkRed min-w-[15rem] h-[10rem] flex justify-center items-center ">
            <img src={GLB} className="w-[10rem]  " />
          </div>
          <div className="hover:bg-darkRed hover:scale-105  hover:drop-shadow-xl bg-lightRed duration-500 p-4 border-solid border-2 border-darkRed min-w-[15rem] h-[10rem] flex justify-center items-center ">
            <img src={ORG} className="w-[12rem]  " />
          </div>
          <div className="hover:bg-darkRed hover:scale-105  hover:drop-shadow-xl bg-lightRed duration-500 p-4 border-solid border-2 border-darkRed min-w-[15rem] h-[10rem] flex justify-center items-center ">
            <img src={RVT} className="w-[10rem]  " />
          </div>
        </div>
      </section>

      <section
        className="font-din text-center p-20 bg-dark 
text-white flex flex-col items-center gap-2 "
      >
        <h1 className="font-din text-5xl  uppercase">
          Not a valorant player ? Not a issue!!
        </h1>
        <h1 className="font-din text-3xl  uppercase">
          Read Our other esports title Guides!
        </h1>
        <div className="grid grid-cols-4 w-[80%] mt-[2rem] justify-items-center">
          {games.map((game) => (
            <div
              className="flex flex-col relative w-[15rem] hover:scale-105 hover:drop-shadow-xl duration-500 "
              key={game.id}
            >
              <div className=" absolute bg-gradient-to-t from-dark to-transparent h-full w-full "></div>
              <img src={game.img} />
              <h1 className="absolute z-10 bottom-2 px-24 ">{game.name}</h1>
            </div>
          ))}
        </div>
        <div className="w-[80%] border-t-2 bg-dark mt-16 "></div>
      </section>
      <footer className="bg-dark flex   text-white font-poppins ">
        <div className="flex flex-col items-center w-full ">
          <div className="p-10 w-[55%] h-2 flex items-center gap-8 justify-center bg-darkRed ">
            <h1>Subscribe Our Newsletter</h1>
            <input
              type="email"
              placeholder="Email"
              className="w-[50%] h-10 p-4 text-white bg-lightRed  hover:drop-shadow-2xl "
            />
            <button className="bg-lightRed h-10 px-6 text-sm hover:drop-shadow-2xl ">Submit</button>
          </div>
          <div className="flex gap-4 text-2xl mt-10  " >
            <a className="hover:text-darkRed hover:scale-110 duration-500 " href="https://github.com/DipeshRajoria007">
              <AiFillGithub />
            </a>
            <a className="hover:text-darkRed hover:scale-110 duration-500  " href="https://dipeshrajoria007.github.io/MyPortfolio/">
              <BiCool />
            </a>
            <a className="hover:text-darkRed hover:scale-110 duration-500  " href="https://www.linkedin.com/in/dipesh-rajoria-175b60192/">
              <AiFillLinkedin />
            </a>
          </div>
          <h1 className="text-[0.75rem] font-thin tracking-wider my-10 ">
            This site is a ReactJs project and Was made for practice only. The
            logos and images that are used in this site belongs to there
            respective oweners.
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Home;
