import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import World from "./components/World";
import India from "./components/India";
import Maharashtra from "./components/Maharashtra";
import { makeStyles } from "@material-ui/core/styles";
import DistrictState from "./components/DistrictState";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";
import Slide from "react-reveal/Slide";

// import DistrictState from "./components/DistrictState";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  custom: {
    paddingTop: 5,
    marginTop: 20,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  heading: {
    fontFamily: "Archivo Black",
    textAlign: "center",
    marginTop: 30,
    fontSize: "4rem",
    color: "#0A79DF",
    textShadow: "0 5px 5px grey",
  },
  tab: {
    margin: "2rem 2rem 2rem 2rem",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LightSpeed left>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} xl={6} md={6}>
            <h1 className={classes.heading}>Stay updated..</h1>
          </Grid>
        </Grid>
      </LightSpeed>
      <Bounce>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
          className={classes.custom}
        >
          <Grid item xs={10} xl={3} md={6}>
            <World />
          </Grid>
          <Grid item xs={10} xl={3} md={6}>
            <India />
          </Grid>
          <Grid item xs={10} xl={3} md={6}>
            <Maharashtra />
          </Grid>
        </Grid>
      </Bounce>
      <Slide left>
        <Grid item xl={12} className={classes.tab}>
          <DistrictState />
        </Grid>
      </Slide>
    </div>
  );
};

export default App;
