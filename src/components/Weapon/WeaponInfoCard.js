import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import APIContext from "../../context/ContextApi";
import load from "./../../assets/valorant_1.gif";
import SkinGrid from "./skins/SkinGrid";

const WeaponInfoCard = () => {
  const { uuid } = useParams();
  const { weapons, fetchWeapons } = useContext(APIContext);
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeapons();
  }, []);

  useEffect(() => {
    setDetails(weapons.find((weapon) => weapon.uuid === uuid));
    setLoading(false);
  }, [weapons]);
  if(details?.displayIcon===null) return (<span>No preview images available</span>);
  if (loading) return <img src={load} />;
  return (
    <div className="bg-lightRed min-h-screen p-10 ">
      <div className="grid grid-cols-3 gap-4 bg-darkRed p-4  text-white justify-items-center  items-center ] ">
        <div className="w-[22rem]">
          {details?.displayIcon===null? (<h1>No preview</h1>) : (<img
            src={details?.displayIcon}
            className="hover:drop-shadow-far  hover:scale-[110%] duration-500 "
          />)}
        </div>
        <div className="justify-self-start flex flex-col col-span-2">
          <div className="font-din uppercase">
            <h1 className=" text-5xl ">{details?.displayName}.</h1>
            <div className="flex justify-between">
              <p className="text-3xl  ">
                Category // {details?.category.slice(21)}.
              </p>
              {details?.shopData && (
                <p className="text-3xl  ">cost // {details?.shopData.cost}.</p>
              )}
            </div>
          </div>
          {details?.weaponStats && (
            <div>
              <div className="mt-3 font-black uppercase font-din text-xl ">
                Weapon Stats :
              </div>
              <div className="grid grid-cols-3 gap-4 mx-10 my-5 capitalize">
                <div>fire Rate : {details?.weaponStats.fireRate}</div>
                <div>
                  first Bullet Accuracy :
                  {details?.weaponStats.firstBulletAccuracy}
                </div>
                <div>magazine Size : {details?.weaponStats.magazineSize}</div>
                <div>
                  reload Time Seconds : {details?.weaponStats.reloadTimeSeconds}
                </div>
                <div>
                  run Speed Multiplier :
                  {details?.weaponStats.runSpeedMultiplier}
                </div>
              </div>
            </div>
          )}
          {details?.weaponStats && (
            <div>
              Damage Stats :
              <table>
                <thead>
                  <tr className="bg-dark  ">
                    <th>Range</th>
                    <th>bodyDamage</th>
                    <th>headDamage</th>
                    <th>legDamage</th>
                  </tr>
                </thead>
                <tbody>
                  {details?.weaponStats.damageRanges.map((info, idx) => (
                    <tr key={idx} className="">
                      <td>
                        {info.rangeStartMeters} - {info.rangeEndMeters}
                      </td>
                      <td>{info.bodyDamage}</td>
                      <td>{info.headDamage}</td>
                      <td>{info.legDamage}</td>
                    </tr>
                  ))}
                  {/* <div>{info.rangeStartMeters} - {info.rangeEndMeters}</div> */}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="p-20 flex flex-col   font-din" >
        <h1 className="text-7xl text-dark items-center text-center drop-shadow-xl">Skins</h1>
        <SkinGrid skins={details?.skins}  />
      </div>
    </div>
  );
};

export default WeaponInfoCard;
