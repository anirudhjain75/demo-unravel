import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, TableSortLabel } from '@mui/material';
import { Box } from '@mui/system';
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import { Delete, Edit } from '@mui/icons-material';

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
  {
    title: "Actions",
    key: "actions",
    style: {
      width: 300
    }
  }
]

const commonHeaderStyle = {
  borderRight: "1px solid #ccc !important"
}

const commonTableBodyCellStyle = {
  borderRight: "1px solid #ccc !important"
}

export default function BasicTable({ rows, order, orderBy, setOrder, setOrderBy, editModal }) {

  const handleSort = (headerKey) => (event) => {

    const isAsc = orderBy === headerKey && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(headerKey);
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
    '&:hover': {
      backgroundColor: '#FFFACD'
    }
  }));


  return (
    <React.Fragment>
      <TableContainer sx={{ width: '60%' }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              {headers.map(((header, idx) => {
                if (header.key === "actions") {
                  return <StyledTableCell key={header.key} sx={{ ...commonHeaderStyle, ...header.style }} value={header.key}>{header.title}</StyledTableCell>
                }
                if (idx == 0) {
                  return <StyledTableCell key={header.key} sx={{ ...commonHeaderStyle, ...header.style }} value={header.key}>{header.title}</StyledTableCell>
                }
                return (
                  <React.Fragment>
                    <StyledTableCell key={header.key} sx={{ ...commonHeaderStyle, ...header.style }} align='right' value={header.key} sortDirection={orderBy === header.key ? order : false}>
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
                    </StyledTableCell>

                  </React.Fragment>
                )
              }))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.eid}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {Object.keys(row).map((key, idx) => {
                  if (idx == 0) {
                    return (
                      <StyledTableCell key={key} sx={{ ...commonTableBodyCellStyle }} component="th" scope="row">
                        {row[key]}
                      </StyledTableCell>
                    )
                  }
                  return <StyledTableCell key={key} sx={{ ...commonTableBodyCellStyle }} align="right">{row[key]}</StyledTableCell>
                })}
                <StyledTableCell key={'action'} sx={{ ...commonTableBodyCellStyle }} >
                  <IconButton onClick={(e) => editModal(row)}>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}