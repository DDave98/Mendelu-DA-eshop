import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Website Optimization',
    description: 'Comprehensive website optimization service to improve loading speed, user experience, and overall performance.',
    price: 299,
    features: ['Performance Analysis', 'Code Optimization', 'Image Optimization', 'Caching Setup'],
    category: 'Technical',
  },
  {
    id: 2,
    title: 'SEO Services',
    description: 'Professional SEO services to improve your website ranking and visibility in search engines.',
    price: 399,
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy'],
    category: 'Marketing',
  },
  {
    id: 3,
    title: 'Content Marketing',
    description: 'Strategic content creation and marketing to engage your audience and drive traffic.',
    price: 199,
    features: ['Content Strategy', 'Blog Writing', 'Social Media Content', 'Email Marketing'],
    category: 'Marketing',
  },
  {
    id: 4,
    title: 'Social Media Management',
    description: 'Professional management of your social media presence across all platforms.',
    price: 249,
    features: ['Content Planning', 'Community Management', 'Analytics', 'Campaign Management'],
    category: 'Marketing',
  },
  {
    id: 5,
    title: 'Email Marketing',
    description: 'Create and manage effective email marketing campaigns to reach your audience.',
    price: 179,
    features: ['Campaign Design', 'List Management', 'Automation Setup', 'Performance Tracking'],
    category: 'Marketing',
  },
  {
    id: 6,
    title: 'Website Security',
    description: 'Comprehensive security solutions to protect your website from threats.',
    price: 349,
    features: ['Security Audit', 'SSL Setup', 'Firewall Configuration', 'Malware Protection'],
    category: 'Technical',
  },
];

const Services = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Our Services
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" align="center" paragraph>
        Choose from our range of professional digital services
      </Typography>

      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} md={6} lg={4} key={service.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {service.title}
                </Typography>
                <Chip
                  label={service.category}
                  color="primary"
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Typography variant="body1" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  ${service.price}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {service.features.map((feature, index) => (
                    <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                      • {feature}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  component={RouterLink}
                  to="/cart"
                >
                  Add to Cart
                </Button>
                <Button size="small" color="primary">
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

export default Services; 