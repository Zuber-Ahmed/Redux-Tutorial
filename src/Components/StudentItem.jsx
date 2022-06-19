import { Grid, Card, CardContent, Button } from "@mui/material";
import React from "react";

export const StudentItem = ({ item }) => {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
            <img style={{marginLeft:"100px"}}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRFZ5YrEnoYzAsbEsALm2VdvMVhNd1Ka0yA&usqp=CAU"
              alt=""
              />
          </Grid>
          <Grid item xs={4}>
          </Grid>
            <Grid item xs={6}>
            <span>Name:{item.name}</span>
              </Grid>
            <Grid item xs={6}>
              <h5>Physical:{item.phy}</h5>
            </Grid>
            <Grid item xs={6}>
              <h5>Skill:{item.skill}</h5>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid xs={4}>
                <Button variant="contained" color="error">Cricket</Button>
            </Grid>
            <Grid xs={4}>
                <Button variant="contained" color="success" >Football</Button>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
