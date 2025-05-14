import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { products } from '../data/products';


const Services = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Naše produkty
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" align="center" paragraph>
        Vyberte si z naší široké nabídky produktů, které vám pomohou dosáhnout vašich cílů.
      </Typography>

      <Grid container spacing={4}>
        {products.map((service) => (
          <Grid item xs={12} md={6} lg={4} key={service.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>{service.title}</Typography>
                <Chip label={service.category} color="primary" size="small" sx={{ mb: 2 }} />
                <Typography variant="body1" color="text.secondary" paragraph>{service.description}</Typography>
                <Typography variant="h6" color="primary" gutterBottom>${service.price}</Typography>
                <Box sx={{ mt: 2 }}>
                  {service.features.map((feature, index) => (
                    <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                      • {feature}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="contained" component={RouterLink} to="/cart"> Přidat do košíku</Button>
                <Button size="small" color="primary">Více o produktu</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services; 