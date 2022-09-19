import React from 'react'
import Weapon from "./Weapon"

const WeaponGrid = ({weapons}) => {
    
  return (
    <div className="grid grid-cols-3 gap-4" >
        {
            weapons && weapons.map((weapon,uuid) =>(
                <Weapon key={uuid} weapon={weapon} className=""  />
            ))
        }
    </div>
  )
}

export default WeaponGrid