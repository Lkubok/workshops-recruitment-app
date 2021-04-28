import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
          <TableRow key={"key"}>
            <TableCell component="th" scope="row">
              {"something to display"}
            </TableCell>
            <TableCell align="center">something to display</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
