import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const featuredServices = [
  {
    title: 'Website Optimization',
    description: 'Improve your website performance and user experience',
    price: 'From $299',
  },
  {
    title: 'SEO Services',
    description: 'Increase your website visibility in search engines',
    price: 'From $399',
  },
  {
    title: 'Content Marketing',
    description: 'Create engaging content that drives traffic',
    price: 'From $199',
  },
];

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Professional Digital Services
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Boost your online presence with our expert services
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={RouterLink}
          to="/services"
          sx={{ mt: 2 }}
        >
          Explore Services
        </Button>
      </Box>

      <Typography variant="h4" component="h2" gutterBottom align="center">
        Featured Services
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {featuredServices.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {service.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={RouterLink} to="/services">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home; 