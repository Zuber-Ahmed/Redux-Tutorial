import React from "react";
import { useSelector } from "react-redux/es/exports";

export const Hookey=()=>{
const hTeam=useSelector(state=>state.gameReducer.hookeyTeam)

    return(
        <div>
            <h3>Hookey Team</h3>
            <ul>
                {hTeam.map((item)=>{
                    return(
                        <li>{item.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}