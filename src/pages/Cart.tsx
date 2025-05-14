import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { pages } from '../data/links';

// This would normally come from a state management solution like Redux
const cartItems = [];

const Cart = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>Náš košík</Typography>

      {cartItems.length === 0 ? (
        <Box textAlign="center" py={4}>
          <Typography variant="h6" gutterBottom>Košík je prázdný</Typography>
          <Button variant="contained" color="primary" component={RouterLink} to={pages.products}>Produkty</Button>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Produkt</TableCell>
                    <TableCell align="right">Cena</TableCell>
                    <TableCell align="right">Množství</TableCell>
                    <TableCell align="right">Celkem</TableCell>
                    <TableCell align="right">Akce</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton color="error">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Shrnutí objednávky
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Mezisoučet</Typography>
                <Typography>${subtotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>DPH (21%)</Typography>
                <Typography>${tax.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Celkem</Typography>
                <Typography variant="h6">${total.toFixed(2)}</Typography>
              </Box>
              <Button variant="contained" color="primary" fullWidth component={RouterLink} to={pages.checkout} > Potvrdit objednávku </Button>
            </Paper>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart; 