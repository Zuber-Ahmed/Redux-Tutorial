import React from "react";
import { useSelector } from "react-redux/es/exports";

export const FootballTeam=()=>{

    const fTeam=useSelector(state=>state.gameReducer.footballTeam)
    console.log(fTeam)


    return(
        <div>
            <h3>Selected Player for Football Team</h3>
            <ul>
                {fTeam.map((item)=>{
                    return(
                        <li>{item.name}</li>
                    )
                }
                )}
            </ul>

        </div>
    )

}