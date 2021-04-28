import React, { useEffect, useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  ship: {
    borderWidth: 1,
    width: 300,
    borderColor: "red",
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const [shipData, setShipData] = useState(null);

  const { shipID } = props.match.params;

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${shipID}`, {
        headers: { "content-type": "application/json" },
      })
      .then((response) => {
        setShipData(response.data);
      });
  }, [shipID]);

  const keys = useMemo(() => shipData && Object.keys(shipData), [shipData]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Property name</TableCell>
            <TableCell align="center">Property value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {keys?.map((key) => (
            <TableRow key={shipData[key]}>
              <TableCell component="th" scope="row">
                {key}
              </TableCell>
              <TableCell align="center">{shipData[key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
