import React, {useContext , useEffect} from 'react';
import APIContext from "../context/ContextApi";
import GearGrid from '../components/Gears/GearGrid';
const Gears = () => {
  const { fetchGears } = useContext(APIContext);
  useEffect(()=>{
    fetchGears();
  },[])
  return (
    <div className="bg-lightRed h-[100vh] relative" >
      <h1 className="text-[10rem] text-dark font-akira text-bold absolute opacity-10 " >Shield</h1>
      <h1 className="text-[1rem] text-dark font-akira text-bold absolute right-[-1rem] top-[20rem] rotate-90 tracking-[3rem] " >Valorant</h1>
      <GearGrid/>
    </div>
  )
}

export default Gears