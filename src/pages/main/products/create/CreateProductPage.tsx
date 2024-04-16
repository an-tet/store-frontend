import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { ProductModel } from '../../../../models/ProductModel';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import { Paper } from '@mui/material';

const product = {
  products: [
    {
      id: 1,
      name: 'name',
      detail: 'detail',
      price: 100,
      stock: 10,
      status: true,
      supplier_id: 1,
    },
  ],
};

export const CreateProductPage = (
  props: { products: ProductModel[] } = product
) => {
  console.log(props);

  const { products } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>name</TableCell>
              <TableCell align='right'>detail</TableCell>
              <TableCell align='right'>price</TableCell>
              <TableCell align='right'>stock</TableCell>
              <TableCell align='right'>status</TableCell>
              <TableCell align='right'>supplier_id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                  <IconButton
                    aria-label='expand row'
                    size='small'
                    onClick={() => setOpen(!open)}
                  >
                    {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </TableCell>
                <TableCell component='th' scope='row'>
                  {product.id}
                </TableCell>
                <TableCell align='right'>{product.name}</TableCell>
                <TableCell align='right'>{product.detail}</TableCell>
                <TableCell align='right'>{product.price}</TableCell>
                <TableCell align='right'>{product.stock}</TableCell>
                <TableCell align='right'>{product.status}</TableCell>
                <TableCell align='right'>{product.supplier_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
