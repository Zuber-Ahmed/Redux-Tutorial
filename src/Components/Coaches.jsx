import React from "react";
import { useSelector } from "react-redux/es/exports";
import { CoachItem } from "./CoachItem";

export const Coaches=()=>{
    const cCoach=useSelector(state=>state.coachReducer.cricketCoaches);
    const fCoach=useSelector(state=>state.coachReducer.footballCoaches);
    const kCoach=useSelector(state=>state.coachReducer.kabaddiCoaches);

    return(
        <div>
        <h2>Cricket Coaches</h2>
        {cCoach.map((item)=>{
            return(
                <CoachItem item={item} />
            )
        })}
        </div>
    )
}