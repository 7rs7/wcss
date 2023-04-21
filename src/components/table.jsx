import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  department: string,
  number: number,
  location: string,
  principal: string,
) {
  return { name, department, number, location, principal };
}

const rows = [
  createData('Lewis Hamilton', 'Mercedes-AMG Petronas', 44, 'United Kingdom', 'Toto Wolff'),
  createData('Charles LeClerc', 'Scuderia Ferrari', 16, 'Monaco', 'Frederic Vasseur'),
  createData('Max Verstappen', 'Red Bull Honda RBPT', 1, 'Netherlands', 'Christian Horner'),
  createData('Lando Norris', 'McLaren Mercedes', 4, 'United Kingdom', 'Andrea Stella'),
  createData('Fernando Alonso', 'Aston Martin Aramco Mercedes', 14, 'Spain', 'Mike Krack'),
];

export default function BasicTable() {
  return (
    <TableContainer style={{ width: 1200}}id="employeetable" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell id="tablecell">Employee</TableCell>
            <TableCell id="tablecell" align="right">Department</TableCell>
            <TableCell id="tablecell" align="right">Number</TableCell>
            <TableCell id="tablecell" align="right">Location</TableCell>
            <TableCell id="tablecell" align="right">Principal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell id="tablecell" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell id="tablecell" align="right">{row.department}</TableCell>
              <TableCell id="tablecell" align="right">{row.number}</TableCell>
              <TableCell id="tablecell" align="right">{row.location}</TableCell>
              <TableCell id="tablecell" align="right">{row.principal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}