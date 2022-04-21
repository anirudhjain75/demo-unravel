import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableSortLabel } from '@mui/material';
import { Box } from '@mui/system';
import { visuallyHidden } from '@mui/utils';

function createData(eid, name, email, phoneno) {
  return { eid, name, email, phoneno };
}

const rows = [
  createData(1, "Tanya", "a@meow.com", "1234567890"),
  createData(2, "Mehru", "b@meow.com", "234567890"),
  createData(3, "Naveen", "c@meow.com", "34567890"),
  createData(4, "Himanshu", "d@meow.com", "4567890"),
  createData(5, "Zangho", "e@meow.com", "567890"),
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
      width: 400
    }
  },
  {
    title: "Email",
    key: "email",
    style: {
      width: 400
    }
  },
  {
    title: "Contact No",
    key: "phoneno",
    style: {
      width: 400
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

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  const handleSort = (headerKey) => (event) => {
    const isAsc = orderBy === headerKey && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(headerKey);
  }

  return (
    <React.Fragment>
      <TableContainer sx={{ width: '60%' }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map(((header, idx) => {
                if (idx == 0) {
                  return <TableCell sx={{ ...commonHeaderStyle, ...header.style }} value={header.key}>{header.title}</TableCell>
                }
                return (
                  <React.Fragment>
                    <TableCell sx={{ ...commonHeaderStyle, ...header.style }} align='right' value={header.key} sortDirection={orderBy === header.key ? order : false}>
                      {header.title}
                      <TableSortLabel
                        active={orderBy === header.key}
                        direction={orderBy === header.key ? order : 'asc'}
                        onClick={handleSort(header.key)}
                      >
                        {header.label}
                        {orderBy === header.key ? (
                          <Box component="span" sx={visuallyHidden}>
                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                          </Box>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>

                  </React.Fragment>
                )
              }))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.sort((a, b) => {
              if (order === 'asc') {
                return a[orderBy] > b[orderBy] ? 1 : -1
              } else {
                return a[orderBy] < b[orderBy] ? 1 : -1
              }
            }).map((row) => (
              <TableRow
                key={row.eid}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {Object.keys(row).map((key, idx) => {
                  if (idx == 0) {
                    return (
                      <TableCell sx={{ ...commonTableBodyCellStyle }} component="th" scope="row">
                        {row[key]}
                      </TableCell>
                    )
                  }
                  return <TableCell sx={{ ...commonTableBodyCellStyle }} align="right">{row[key]}</TableCell>
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}