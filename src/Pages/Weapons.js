import React, { useState, useEffect, useContext } from "react";
import APIContext from "../context/ContextApi";
import Weapon from "../components/Weapon/Weapon";
import "./css/Weapons.css";

import Select from "react-select";
import WeaponGrid from "../components/Weapon/WeaponGrid";

const options = [
  { value: "EEquippableCategory::AllWeapons", label: "All Weapons" },
  { value: "EEquippableCategory::Heavy", label: "Heavy" },
  { value: "EEquippableCategory::Rifle", label: "Rifle" },
  { value: "EEquippableCategory::Shotgun", label: "Shotgun" },
  { value: "EEquippableCategory::Sidearm", label: "Sidearm" },
  { value: "EEquippableCategory::Sniper", label: "Sniper" },
  { value: "EEquippableCategory::SMG", label: "SMG" },
  { value: "EEquippableCategory::Melee", label: "Melee" },
];

const Weapons = () => {
  const [selectedValue, setSelectedValue] = useState(
    "EEquippableCategory::AllWeapons"
  );
  const { weapons, fetchWeapons } = useContext(APIContext);
  const [newWeapons, setNewWeapons] = useState(weapons);
  useEffect(() => {
    fetchWeapons();
  }, []);
  useEffect(() => {
    setNewWeapons(weapons);
    // console.log(weapons);
  }, [weapons]);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "2px solid #dc3d4b",
      borderColor: state.isFocused ? "white" : "#dc3d4b",
      "&:hover": {
        borderColor: "white",
        boxShadow: "none",
      },
      backgroundColor: "#fa4454",
      borderRadius: "0",
      padding: "4px",
    }),
    option: (provided, state) => ({
      ...provided,
      borderRadius: "0",
      padding: "6px",
      backgroundColor: state.isSelected ? "#dc3d4b" : "#fa4454",
    }),
    menu: (provided, state) => ({
      ...provided,
      borderRadius: "0",
      // padding:'6px',
      backgroundColor: state.isSelected ? "#dc3d4b" : "#fa4454",
    }),
    menuList: (provided, state) => ({
      ...provided,
      borderRadius: "0",
      marginLeft: "15px",
      backgroundColor: state.isSelected ? "#dc3d4b" : "#fa4454",
      backgroundColor: state.isFocused ? "#dc3d4b" : "#fa4454",
    }),
    container: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      // borderColor: state.isFocused ? 'white' : 'white',
      // borderColor: state.isSelected ? "#fa4454" : "white" ,
      padding: ".75rem",
    }),
    valueContainer: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      padding: ".75rem",
    }),
    placeholder: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      color: "#042e27",
    }),
  };

  const handleChange = (e) => {
    setSelectedValue(e.value);
  };
  useEffect(() => {
    selectedValue !== "EEquippableCategory::AllWeapons"
      ? setNewWeapons(
          weapons.filter((weapon) => weapon.category === selectedValue)
        )
      : setNewWeapons(weapons);
  }, [selectedValue]);
  console.log(selectedValue);

  return (
    <div className="relative bg-lightRed min-h-[100vh] ">
      <div className="absolute  right-16 pt-[6rem] ">
        <Select
          styles={customStyles}
          value={console.log(selectedValue)}
          placeholder={"All Weapons"}
          options={options}
          onChange={handleChange}
          className="w-[30rem] mr-16 "
        />
      </div>
      <div className="grid grid-row-2 p-[6rem] gap-6">
        <h1 className="text-[6rem] font-din uppercase font-bold text-dark leading-[5rem] tracking-tighter ">
          Select Your <br /> Weapon.
        </h1>
        <WeaponGrid weapons={newWeapons} />
      </div>
    </div>
  );
};

export default Weapons;
