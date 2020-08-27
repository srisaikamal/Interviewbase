import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Kamal Vasamsetti",
    "UI/UX Designer",
    "Hired",
    "16/10/2020",
    "10:04 PM"
  ),
  createData(
    "Jessica Davis",
    "Technical Expert",
    "Denied",
    "10/01/2019",
    "7:55 AM"
  ),
  createData(
    "Ariana Grande",
    "Front-End Engineer",
    "Hired",
    "11/05/2020",
    "5:14 PM"
  ),
  createData(
    "Shawn Mendes",
    "Backend Developer",
    "Scheduled",
    "10/10/2020",
    "11:24 PM"
  ),
  createData(
    "Anna Maria",
    "DevOps Engineer",
    "Scheduled",
    "16/10/2020",
    "10:4 PM"
  ),
];

function MUITable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Status</TableCell>
            {/* <TableCell>Date</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              {/* <TableCell>{row.carbs}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default MUITable;
