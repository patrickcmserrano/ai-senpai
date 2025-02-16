import React, { useState } from 'react';
import { Button, Chip, Typography, Box } from '@mui/material';

const genres = [
  'Ação', 'Aventura', 'Comédia', 'Drama', 'Fantasia', 'Terror', 'Mistério', 'Romance', 'Ficção Científica'
];

const genreMap = {
  'Ação': 'Action',
  'Aventura': 'Adventure',
  'Comédia': 'Comedy',
  'Drama': 'Drama',
  'Fantasia': 'Fantasy',
  'Terror': 'Horror',
  'Mistério': 'Mystery',
  'Romance': 'Romance',
  'Ficção Científica': 'Sci-Fi'
};

const GenreSelector = ({ onSelectGenres }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(genre)
        ? prevSelectedGenres.filter((g) => g !== genre)
        : [...prevSelectedGenres, genre]
    );
  };

  const handleConfirm = () => {
    const adaptedGenres = selectedGenres.map((genre) => genreMap[genre]);
    onSelectGenres(adaptedGenres);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
      <Box sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h5" gutterBottom>Selecione seu gênero preferido</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {genres.map((genre) => (
            <Chip
              key={genre}
              label={genre}
              clickable
              color={selectedGenres.includes(genre) ? 'primary' : 'default'}
              onClick={() => handleGenreChange(genre)}
            />
          ))}
        </Box>
        <Button variant="contained" color="primary" onClick={handleConfirm} sx={{ mt: 2 }}>
          Confirmar
        </Button>
      </Box>
    </Box>
  );
};

export default GenreSelector;
