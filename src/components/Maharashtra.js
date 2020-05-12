import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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
function Maharashtra() {
  const [maha, setMaha] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        // console.log(res.data.statewise);
        // console.log(
        //   res.data.statewise.filter((s) => s.state === "Maharashtra")[0]
        // );
        setMaha(res.data.statewise.filter((s) => s.state === "Maharashtra")[0]);
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
            Maharashtra
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.abc}
          >
            <p>Active: {maha.active}</p>
            <p>Confirmed: {maha.confirmed}</p>
            <p>Deaths: {maha.deaths}</p>
            <p>Recovered: {maha.recovered}</p>
            <p>Last updated time: {maha.lastupdatedtime}</p>

            {/* {Object.keys(maha).map((key) => {
              return (
                <div>
                  {key} : {maha[key]}
                </div>
              );
            })} */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Maharashtra;
