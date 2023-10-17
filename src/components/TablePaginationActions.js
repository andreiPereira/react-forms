import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import { useState } from 'react';
import { Button, TableHead } from '@mui/material';
import { useEffect } from 'react';

var moment = require('moment'); // require
moment().format(); 

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const CustomPaginationActionsTable = ({itens , busca, colums}) => {

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [count, setCount] = useState(0)


  const rowsFilter = itens ? itens.filter(filtro => filtro.name.toLowerCase().includes(busca.toLowerCase())) : '';



  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - itens.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const styleHeader = {
    fontWeight: 700,
    backgroundColor: '#f2f2f2'
  }

  const styleHeaderLeft = {
    fontWeight: 700,
    minWidth: 200,
    backgroundColor: '#f2f2f2',
    borderRadius: '20px 0px 0px 0px'
  }

  const styleHeaderRight = {
    fontWeight: 700,
    backgroundColor: '#f2f2f2',
    borderRadius: '0px 20px 0px 0px'
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function createData(name) {
    return { name };
  }
  
  React.useEffect(()=>{
    try{
      setCount(itens.length)
    }catch (e){
      setCount(0)
    }
  })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead >
          <TableRow>
            <TableCell sx={styleHeaderLeft} align="center"></TableCell>
            <TableCell sx={styleHeader} align="center">Nome</TableCell>
            <TableCell sx={styleHeaderRight} align="center">Ação</TableCell>
          </TableRow>
        </TableHead>  
        <TableBody>
          { (count > 0 ) ? 
          (rowsPerPage > 0
            ? rowsFilter.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rowsFilter
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center" component="th" scope="row">
                    <img src={row.img} alt="" height={'50px'} width={'50px'}/>
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  <Button 
                    sx={{color:'#390540'}} 
                    color='secondary' 
                    variant="outlined"
                    disabled
                    >info</Button>
                </TableCell>
              </TableRow>
            )
            
            ):
            <TableRow key='a'>
                <TableCell align="center" component="th" scope="row">
                  Sem atendimentos
                </TableCell>
                <TableCell align="center" component="th" scope="row"></TableCell>
              </TableRow>
          }
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={3}
              count={rowsFilter.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                native: true,
              }}
              labelRowsPerPage='Paises por página'
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default CustomPaginationActionsTable