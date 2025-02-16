import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Chip, Typography, Box } from '@mui/material';

function AnimeCard({ title, imageUrl, description, genres }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: '100%', overflow: { xs: 'auto', sm: 'hidden' } }}>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2, maxWidth: { xs: '100%', sm: '50%' } }}>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap' }}>
          {genres.map((genre) => (
            <Chip key={genre} label={genre} sx={{ margin: '2px' }} />
          ))}
        </Box>
      </Box>
      <CardMedia
        component="img"
        alt={title}
        image={imageUrl}
        title={title}
        sx={{ flex: { xs: '0 0 100%', sm: '0 0 50%' }, objectFit: 'cover', maxHeight: '100%', width: '100%' }}
      />
    </Card>
  );
}

AnimeCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AnimeCard;
