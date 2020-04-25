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
    backgroundColor: "#2196F3",
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
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});
function DistrictState() {
  const [dist, setDist] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((res) => {
        console.log(res.data.Maharashtra.districtData);
        setDist(res.data.Maharashtra.districtData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customize table">
          <TableHead>
            <TableRow className={classes.th}>
              <StyledTableCell align="center">District</StyledTableCell>
              <StyledTableCell align="center">Active</StyledTableCell>
              <StyledTableCell align="center">Confirmed</StyledTableCell>
              <StyledTableCell align="center">Deceased</StyledTableCell>
              <StyledTableCell align="center">Recovered</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">
                {Object.keys(dist).map((key) => {
                  return (
                    <div key={key}>
                      {key}
                      <hr></hr>
                    </div>
                  );
                })}
              </StyledTableCell>

              <StyledTableCell align="center">
                {Object.keys(dist).map((key) => {
                  return (
                    <div key={key}>
                      {dist[key].active}
                      <hr></hr>
                    </div>
                  );
                })}
              </StyledTableCell>

              <StyledTableCell align="center">
                {Object.keys(dist).map((key) => {
                  return (
                    <div key={key}>
                      {dist[key].confirmed}
                      <hr></hr>
                    </div>
                  );
                })}
              </StyledTableCell>
              <StyledTableCell align="center">
                {Object.keys(dist).map((key) => {
                  return (
                    <div key={key}>
                      {dist[key].deceased}
                      <hr></hr>
                    </div>
                  );
                })}
              </StyledTableCell>
              <StyledTableCell align="center">
                {Object.keys(dist).map((key) => {
                  return (
                    <div key={key}>
                      {dist[key].recovered}
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
export default DistrictState;
