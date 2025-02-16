import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Chip, Typography, Box } from '@mui/material';

function AnimeCard({ title, imageUrl, description, genres }) {
  return (
    <Card sx={{ maxWidth: 345, mx: 'auto', mt: 2 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={imageUrl}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box sx={{ mt: 1 }}>
          {genres.map((genre) => (
            <Chip key={genre} label={genre} sx={{ margin: '2px' }} />
          ))}
        </Box>
      </CardContent>
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
