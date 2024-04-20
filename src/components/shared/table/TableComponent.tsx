import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Delete, Edit } from '@mui/icons-material';
import {
  Grid,
  InputBase,
  Paper,
  TableContainer,
  TablePagination,
} from '@mui/material';
import { TablePropsInterface } from '../interfaces/TablePropsInterface';
import {
  containerStyles,
  inputStyles,
  searchTableStyles,
  tableStyles,
} from './TableStyles';

export const TableComponent = (props: TablePropsInterface) => {
  const { headers, searchItem, actions } = props;
  const [rows, setRows] = useState(props.rows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setRows(
      props.rows.filter((row) => {
        const value: string = row[searchItem.key].toLowerCase();
        const compareValue: string = e.target.value.toLowerCase();
        return value.includes(compareValue);
      })
    );
  };

  return (
    <>
      <Grid sx={containerStyles}>
        <Paper component='form' sx={searchTableStyles}>
          <InputBase
            sx={inputStyles}
            placeholder={searchItem.placeholder}
            inputProps={{ 'aria-label': searchItem.placeholder }}
            onChange={handleSearch}
          />
          <IconButton type='button' aria-label='search'>
            <SearchIcon />
          </IconButton>
        </Paper>
        <TableContainer component={Paper} sx={tableStyles}>
          <Table stickyHeader>
            <TableHead>
              <TableRow hover>
                {headers.map((header) => (
                  <TableCell key={header.key}>{header.text}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={headers.length} align='center'>
                    No hay información para mostrar
                  </TableCell>
                </TableRow>
              )}
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    {headers.map((header) => {
                      if (header.key !== 'actions') {
                        return (
                          <TableCell key={header.key}>
                            {row[header.key]}
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell
                            sx={{ display: 'flex' }}
                            key={header.key + index}
                          >
                            {actions.map((action) => (
                              <IconButton
                                key={action.type}
                                aria-label={action.type.concat('Icon')}
                                onClick={() =>
                                  navigate(action.redirectTo.concat(row.id))
                                }
                              >
                                {action.type === 'delete' ? (
                                  <Delete color='error' />
                                ) : action.type === 'edit' ? (
                                  <Edit color='primary' />
                                ) : (
                                  action.type
                                )}
                              </IconButton>
                            ))}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component='div'
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            width={700}
          />
        </TableContainer>
      </Grid>
    </>
  );
};
