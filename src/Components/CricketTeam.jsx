import React from "react";
import { useSelector } from "react-redux/es/exports";
import { StudentItem } from "./StudentItem";
import {Grid} from '@mui/material'


export const CricketTeam=({item})=>{
    const cTeam=useSelector(state=>state.gameReducer.cricketTeam);
    return(
        <div>
            <h3>Selected Players List</h3>
            <ul>
        {cTeam.map((item)=>{
             return(
                <li>{item.name}</li>
            
                 )
                 
                }
                )}
        </ul>
        </div>
    )
}