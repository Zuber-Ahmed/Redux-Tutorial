import React from "react";
import { useSelector } from "react-redux/es/exports";

export const Kabbadi=()=>{
    const kTeam=useSelector(state=>state.gameReducer.kabbadiTeam)

    return(
        <div>
            <h3>Kabbadi Players</h3>
                <ul>
                    {kTeam.map((item)=>{
                        return(
                            <li>{item.name}</li>
                        )
                    })}
                </ul>


        </div>
    )
}