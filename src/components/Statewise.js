import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#E74292",
    color: theme.palette.common.white,
    fontSize: 18,
    fontFamily: "Archivo Black",
  },
  body: {
    fontSize: 17,
    fontFamily: "Archivo Black",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      background: "linear-gradient(45deg, #ffffff 30%, lightgrey 100%)",
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
  firtscol: {
    minWidth: 325,
    maxWidth: 325,
  },
});
function Statewise() {
  const [dist, setDist] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        console.log(res.data.statewise);
        setDist(res.data.statewise);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customize table">
          <TableHead>
            <TableRow className={classes.th}>
              <StyledTableCell align="center">State</StyledTableCell>
              <StyledTableCell align="center">Active</StyledTableCell>
              <StyledTableCell align="center">Confirmed</StyledTableCell>
              <StyledTableCell align="center">Deaths</StyledTableCell>
              <StyledTableCell align="center">Recovered</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center" className={classes.firtscol}>
                {dist.map((key) => {
                  return (
                    <div key={key}>
                      {key.state}
                      <hr></hr>
                    </div>
                  );
                })}
              </StyledTableCell>

              <StyledTableCell align="center">
                {dist.map((key) => {
                  return (
                    <div key={key}>
                      {key.active}
                      <hr></hr>
                    </div>
                  );
                })}
              </StyledTableCell>

              <StyledTableCell align="center">
                {dist.map((key) => {
                  return (
                    <div key={key}>
                      {key.confirmed}
                      <hr></hr>
                    </div>
                  );
                })}
              </StyledTableCell>

              <StyledTableCell align="center">
                {dist.map((key) => {
                  return (
                    <div key={key}>
                      {key.deaths}
                      <hr></hr>
                    </div>
                  );
                })}
              </StyledTableCell>

              <StyledTableCell align="center">
                {dist.map((key) => {
                  return (
                    <div key={key}>
                      {key.recovered}
                      <hr></hr>
                    </div>
                  );
                })}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* {Object.keys(dist).map((key) => {
        return <p key={key}>{dist[key].active}</p>;
      })}
      {Object.keys(dist).map((key) => {
        return <p key={key}>{dist[key].confirmed}</p>;
      })}
      {Object.keys(dist).map((key) => {
        return <p key={key}>{dist[key].deceased}</p>;
      })}
      {Object.keys(dist).map((key) => {
        return <p key={key}>{dist[key].recovered}</p>;
      })} */}
    </div>
  );
}
export default Statewise;
