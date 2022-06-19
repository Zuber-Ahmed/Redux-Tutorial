import React from "react";
import { StudentItem } from "./StudentItem";
import Grid from "@mui/material/Grid";

export const ClassIX=()=>{

    const student=[
        { name:" A Rahane",phy:5,skill:8},
        { name:"Amit Mishra",phy:8,skill:9},
        { name:"Khalid Khan",phy:9,skill:7},
        { name:"Akbar Shaikh",phy:7,skill:4},
        { name:"MS Dhoni",phy:10,skill:8},
        { name:"Sami Khan",phy:3,skill:5},
        { name:"Samad S Khan",phy:8,skill:9}              
]

    return(
        <div>
            <h1>Team Knight Rider</h1>
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