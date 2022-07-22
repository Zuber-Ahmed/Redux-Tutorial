import { Grid, Card, CardContent, Button} from "@mui/material";
import React from "react";
import { useDispatch,useSelector } from "react-redux/es/exports";

export const StudentItem = ({ item }) => {

  const criTeam=useSelector(state=>state.gameReducer.cricketTeam);
  const fTeam=useSelector(state=>state.gameReducer.footballTeam);
  const hTeam=useSelector(state=>state.gameReducer.hookeyTeam);
  const kTeam=useSelector(state=>state.gameReducer.kabbadiTeam)

  const dispatch = useDispatch();

  const handleCricket = (curr) => {
      if(criTeam.length<11){
        dispatch({ type: "cricketTeam", payload: curr });
      }};
      
  const handleFootball = (curr) => {
    dispatch({ type: "footballTeam", payload: curr });
  };

  const handleHookey=(curr)=>{
    if((criTeam.some(p=>p.name===item.name)|| fTeam.some(p=>p.name===item.name))){

      dispatch({type:"hookeyTeam",payload:curr})
    }
  }
  const handleKabbadi=(curr)=>{
    if((criTeam.some(p=>p.name===item.name) || hTeam.some(p=>p.name===item.name))){
      dispatch({type:"kabbadiTeam",payload:curr})
    }
  }

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
            <img
              style={{ marginLeft: "100px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRFZ5YrEnoYzAsbEsALm2VdvMVhNd1Ka0yA&usqp=CAU"
              alt=""
            />
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={6}>
            <span>Name:{item.name}</span>
          </Grid>
          <Grid item xs={6}>
            <h5>Physical:{item.phy}</h5>
          </Grid>
          <Grid item xs={6}>
            <h5>Skill:{item.skill}</h5>
          </Grid>
          <Grid xs={3}>
            <Button
              variant="contained"
              color="error"
              disabled={criTeam.some(p=>p.name===item.name)}
              onClick={() => handleCricket(item)}
            >
              Cricket
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button
              variant="contained"
              color="success"
              disabled={fTeam.some(p=>p.name===item.name)}
              onClick={() => handleFootball(item)}
            >
              Football
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button
              variant="contained"
              color="info"
              disabled={hTeam.some(p=>p.name===item.name)}
              onClick={() => handleHookey(item)}
            >
              Hookey
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button
              variant="contained"
              color="info"
              disabled={kTeam.some(p=>p.name===item.name)}
              onClick={() => handleKabbadi(item)}
            >
              Kabbadi
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
