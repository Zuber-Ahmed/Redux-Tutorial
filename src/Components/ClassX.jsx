import React from "react";
import Grid from "@mui/material/Grid";
import { StudentItem } from "./StudentItem";

export const ClassX=()=>{
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
            <h1>Team UltiMax</h1>
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