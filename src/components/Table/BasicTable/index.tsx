import { FC } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface ITableRow {
  [key: string]: string;
}

interface BasicTableProps {
  headers: Array<string>;
  rows: Array<ITableRow>;
  minWidth: number;
}

const BasicTable: FC<BasicTableProps> = ({ rows, headers, minWidth }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: minWidth }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {headers.map((value) => (
              <TableCell key={value} align='center'>
                {value}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {Object.keys(row).map((key) => (
                <TableCell key={key} align='center'>
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
