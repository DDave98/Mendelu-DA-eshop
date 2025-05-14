import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DA projekt e-shop
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Domů
        </Button>
        <Button color="inherit" component={RouterLink} to="/products">
          Produkty
        </Button>
        <IconButton color="inherit" component={RouterLink} to="/cart">
          <Badge badgeContent={0} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 