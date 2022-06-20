import React from "react";
import Grid from "@mui/material/Grid";
import { StudentItem } from "./StudentItem";
import { useSelector } from "react-redux/es/exports";

export const ClassX=()=>{
    const bulbStatus=useSelector(state=>state.gameReducer.bulb)
    const student=[
        { name:"AR Raheman",phy:5,skill:8},
        { name:"Kabir Sing",phy:8,skill:9},
        { name:"Salman Khan",phy:9,skill:7},
        { name:"Abishek Rao",phy:7,skill:4},
        { name:"Rishab Pant",phy:10,skill:8},
        { name:"Yogesh K",phy:3,skill:5},
        { name:"KL Rahul",phy:8,skill:9}              
]

    return(
        <div>
            <h1>Team Defender {bulbStatus? <img src="/images/ON.jfif" alt='' width="50" height={70}/>:<img src="/images/OFF.jfif" width="50" height={70} alt=''/>} </h1>
            <Grid container spacing={2}>
        {student.map((item)=>{
            return(
                <Grid item xs={3}>
                    <StudentItem item={item}/>
                </Grid>

            )

})}
</Grid>

        </div>
    )
}