import React, { useState } from 'react';
import axios from 'axios';

const APIContext = React.createContext();
const baseURL = "https://valorant-api.com/v1";


export const APIProvider = ({ children }) => {

    const [agents,setAgents]= useState([]);
    const [gears,setGears]= useState([]);
    const [maps,setMaps]= useState([]);
    const [weapons,setWeapons]= useState([]);
    

    const fetchAgents = async () =>{
        const response = await axios.get(`${baseURL}/agents?isPlayableCharacter=true`);
        setAgents(response.data.data);
    }

    const fetchGears = async () =>{
        const response = await axios.get(`${baseURL}/gear`);
        setGears(response.data.data);

    }

    const fetchMaps = async () =>{
        const response = await axios.get(`${baseURL}/maps?language=en-US`);
        setMaps(response.data.data);
    }

    const fetchWeapons = async () =>{
        const response = await axios.get(`${baseURL}/weapons?language=en-US`);
        setWeapons(response.data.data);
        // console.log(response.data.data);
    }

    return(
        <APIContext.Provider value={{
            fetchAgents,
            fetchGears,
            fetchMaps,
            fetchWeapons,
            agents,
            gears,
            maps,
            weapons
        }}>
            {children}
        </APIContext.Provider>
    );

}

export default APIContext;

