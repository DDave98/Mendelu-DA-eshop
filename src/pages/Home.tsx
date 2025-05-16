import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { pages } from '../data/links';

const Home = () => {
  return (
    <Box>
      <Box sx={{bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center', mb: 4,}}>
        <Typography variant="h3" component="h1" gutterBottom>Sportovní vybavení na míru</Typography>
        <Typography variant="h5" component="h2" gutterBottom>Objevte širokou nabídku produktů pro všechny vaše potřeby</Typography>
        <Button
          variant="contained" color="secondary" size="large" component={RouterLink} to={pages.products} sx={{ mt: 2 }}>Prohlédnout si produkty</Button>
      </Box>
    </Box>
  );
};

export default Home; 