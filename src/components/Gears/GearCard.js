import React from "react";

const GearCard = ({ gear }) => {
  console.log(gear);
  return (
    <div className="grid grid-rows-2 gap-3 items-center  w-[24rem] h-[32rem] justify-items-center font-poppins bg-darkRed text-white drop-shadow-xl hover:drop-shadow-2xl hover:scale-105 duration-500 ">
      <div className="">
        <img src={gear.shopData.newImage} className="h-[10rem]" />
      </div>
      <div className="p-10 bg-dark">
        <h3 className=" font-valorant text-3xl ">{gear.displayName}</h3>
        <p className="">{gear.description}</p>
        <br />
        <p className="">
          Cost : {gear.shopData.cost}
        </p>
        <p className="">
          Category : {gear.shopData.category}
        </p>
        <p className="">
          Category Text : {gear.shopData.categoryText}
        </p>
      </div>
    </div>
  );
};

export default GearCard;
