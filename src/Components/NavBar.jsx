import { Grid, Card, CardContent, Button,Badge} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";

export const NavBar = () => {
  const bulbStatus = useSelector((state) => state.gameReducer.bulb);
  const criTeam =useSelector((state)=>state.gameReducer.cricketTeam);
  const fTeam =useSelector((state)=>state.gameReducer.footballTeam);
  const hTeam =useSelector((state)=>state.gameReducer.hookeyTeam);
  const kTeam =useSelector((state)=>state.gameReducer.kabbadiTeam);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "bulb",
      payload: "ON",
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Link to="/8th">
          <Card>
            <CardContent>Class VIII</CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/9th">
          <Card>
            <CardContent>Class IX</CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/10th">
          <Card>
            <CardContent>Class X</CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link to ='/CricketTeam'>
            <Badge badgeContent={criTeam.length} color='error'>
            <Card>
                <CardContent>Cricket Team</CardContent>
            </Card></Badge>
        </Link>
      </Grid>

      <Grid item xs={1}>
        <Link to ='/FootballTeam'>
        <Badge badgeContent={fTeam.length} color='error'>
            <Card>
                <CardContent>Football Team</CardContent>
            </Card> </Badge>
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link to ='/hookey'>
        <Badge badgeContent={hTeam.length} color='error'>
            <Card>
                <CardContent>Hookey Team</CardContent>
            </Card> </Badge>
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link to ='/kabbadi'>
        <Badge badgeContent={kTeam.length} color='error'>
            <Card>
                <CardContent>Kabbadi Team</CardContent>
            </Card> </Badge>
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link to='/coaches'>
            <Card>
                <CardContent>Coaches</CardContent>
            </Card>
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Button
          variant="contained"
          color={bulbStatus ? "success" : "error"}
          onClick={handleClick}
        >{bulbStatus ? "ON" : "OFF"}
        </Button>
      </Grid>
    </Grid>
  );
};
