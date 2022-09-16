import React from 'react'
import HomeCard from "./HomeCard";
const HomeGrid = ({data}) => {
  return (
    <div className="flex w-[38rem] justify-center flex-wrap gap-8 bg-LightRed  ">
      {
        data.map((cardData, index) => (
          <HomeCard data={ cardData } key={ "card-id-" + index } />
        ))
      }
    </div>
  )
}

export default HomeGrid