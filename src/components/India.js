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
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 5px 5px grey",
    color: "black",
  },
  abc: {
    fontFamily: "Archivo Black",
    color: "white",
  },
  pqr: {
    fontFamily: "Archivo Black",
  },
});
function India() {
  const [india, setIndia] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get("https://api.covid19india.org/data.json").then((res) => {
      // console.log(
      //   res.data.cases_time_series[res.data.cases_time_series.length - 1]
      // );
      setIndia(
        res.data.cases_time_series[res.data.cases_time_series.length - 1]
      );
    });
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
            India
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.abc}
          >
            <p>Till {india.date},</p>
            <p>Total confirmed: {india.totalconfirmed}</p>
            <p>Total deceased: {india.totaldeceased}</p>
            <p>Total recovered: {india.totalrecovered}</p>
            {/* {Object.keys(india).map((key) => {
              return (
                <div>
                  {key} : {india[key]}
                </div>
              );
            })} */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default India;
