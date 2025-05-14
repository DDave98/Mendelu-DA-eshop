import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { pages } from '../data/links';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DA projekt e-shop
        </Typography>
        <Button color="inherit" component={RouterLink} to={pages.home}>Domů</Button>
        <Button color="inherit" component={RouterLink} to={pages.products}>Produkty</Button>
        <IconButton color="inherit" component={RouterLink} to={pages.cart}>
          <Badge badgeContent={0} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 