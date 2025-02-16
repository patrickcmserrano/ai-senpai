import React, { useState } from 'react';
import { Button, Radio, FormControlLabel, FormGroup, Typography, Box } from '@mui/material';

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

function GenreSelector({ onSelectGenres }) {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSubmit = () => {
    const adaptedGenre = genreMap[selectedGenre];
    onSelectGenres([adaptedGenre]);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
      <Box sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h5" gutterBottom>Selecione seu gênero preferido</Typography>
        <FormGroup>
          {genres.map((genre) => (
            <FormControlLabel
              key={genre}
              control={
                <Radio
                  checked={selectedGenre === genre}
                  onChange={handleGenreChange}
                  value={genre}
                  name="genre"
                />
              }
              label={genre}
            />
          ))}
        </FormGroup>
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
          Confirmar
        </Button>
      </Box>
    </Box>
  );
}

export default GenreSelector;
