import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeCard = ({data}) => {
  return (
    <Link to={`/${data.title}`} >
        <div className=" grid h-[20rem] bg-darkRed   maxW-[18rem] w-[18rem] hover:drop-shadow-2xl hover:scale-105 duration-500 cursor-pointer ">
            <div className="flex justify-center items-center h-32 ">
              <span className="">
                <FontAwesomeIcon className="text-[5rem] text-white drop-shadow-lg" icon={data.icon} size="lg" />
              </span>
            </div>
            <div className=" bg-dark text-white p-2 ">
              <div className=""><span>{ data.title }</span></div>
              <div className=""><span>{ data.details }</span></div>
            </div>
          </div>
    </Link>
  )
}

export default HomeCard