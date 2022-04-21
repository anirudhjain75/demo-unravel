import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(eid, name, email, phoneno) {
  return {eid, name, email, phoneno};
}

const rows = [
  createData(1, "meow", "meow@meow.com", "1234567890"),
  createData(2, "meow", "meow@meow.com", "1234567890"),
  createData(3, "meow", "meow@meow.com", "1234567890"),
  createData(4, "meow", "meow@meow.com", "1234567890"),
  createData(5, "meow", "meow@meow.com", "1234567890"),
];

const headers = [
    {
        title: "Employee Id",
        key: "eid",
        style: {
          width: 200
        }
    },
    {
        title: "Employee Name",
        key: "name",
        style: {
          width: 300
        }
    },
    {
        title: "Email",
        key: "email",
        style: {
          width: 300
        }
    },
    {
        title: "Contact No",
        key: "phoneno",
        style: {
          width: 300
        }
    },

]

const commonHeaderStyle = {
  borderRight: "1px solid #ccc !important"
}

const commonTableBodyCellStyle = {
  borderRight: "1px solid #ccc !important"
}

export default function BasicTable() {
  return (
    <TableContainer sx={{width: '60%'}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map(((header, idx) => {
              if (idx == 0) {
                return <TableCell sx={{...commonHeaderStyle, ...header.style}} value={header.key}>{header.title}</TableCell>
              }
              return <TableCell sx={{...commonHeaderStyle, ...header.style}} align='right' value={header.key}>{header.title}</TableCell>
            }))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.eid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {Object.keys(row).map((key, idx) => {
                if (idx == 0) {
                  return (
                  <TableCell sx={{...commonTableBodyCellStyle}} component="th" scope="row">
                    {row[key]}
                  </TableCell>
                  )
                }
                return <TableCell sx={{...commonTableBodyCellStyle}} align="right">{row[key]}</TableCell>
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}