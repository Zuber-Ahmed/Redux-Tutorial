import React from "react";
import { StudentItem } from "./StudentItem";
import {Grid} from '@mui/material'

export const ClassVIII=()=>{

    const student=[
            { name:"Sujata Sinha",phy:7,skill:8},
            { name:"Amit Kumar",phy:6,skill:9},
            { name:"Umar Khan",phy:9,skill:6},
            { name:"Sumit Kadarkar",phy:7,skill:7},
            { name:"Rajni Kanth",phy:10,skill:8},
            { name:"Hardik Pandiya",phy:9,skill:5},
            { name:"Sikandar Ali",phy:7,skill:9}              
    ]

    return(
        <div>
            <h1>Team Warrior</h1>
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