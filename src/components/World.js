import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../App.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: "center",
    background: "#ffffff",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 5px 5px grey",
    color: "#E74292",
  },
  abc: {
    fontFamily: "Archivo Black",
    color: "black",
  },
  pqr: {
    fontFamily: "Archivo Black",
  },
});
function World() {
  const [world, setWorld] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/world/total")
      .then((res) => {
        //console.log(res);
        setWorld(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            className={classes.pqr}
          >
            World
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.abc}
          >
            <p>Total Confirmed: {world.TotalConfirmed}</p>
            <p>Total Deaths: {world.TotalDeaths}</p>
            <p>Total Recovered: {world.TotalRecovered}</p>
            {/* {Object.keys(world).map((key) => {
              return (
                <div>
                  {key} : {world[key]}
                </div>
              );
            })} 
            Oswald Anton Abrilfatface
            */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default World;
