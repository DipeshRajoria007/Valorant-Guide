import React from "react";
import { Link } from "react-router-dom";
import ValorantGuide from "../../assets/valorant-guide.png";
import ValoLogo from "../../assets/valorantLogo.png";
const Header = () => {
  return (
    <header className=" flex bg-dark h-20 text-white flex-row gap-60 justify-around  items-center content-center">
      <div className="flex gap-5 justify-center items-center ">
        <Link to="/" className="flex h-20 justify-center content-center">
          <img src={ValorantGuide} className="" alt=""></img>
        </Link>
          <div className=" border-white border-l-[2px] h-10 "></div>
        <Link to="/" >
          <img src={ValoLogo} className="h-12" alt="" ></img>
        </Link>
      </div>
      <nav>
        <ul className=" flex flex-row justify-center gap-10 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Agents">Agents</Link>
          </li>
          <li>
            <Link to="/Gears">Gears</Link>
          </li>
          <li>
            <Link to="/Maps">Maps</Link>
          </li>
          <li>
            <Link to="/Weapons">Weapons</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
