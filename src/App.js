import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, CircularProgress, Box } from '@mui/material';
import GenreSelector from './components/GenreSelector';
import AnimeCard from './components/AnimeCard';
import { fetchAnimeByGenres } from './services/anilistService';

function App() {
  const [recommendedAnime, setRecommendedAnime] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelectGenres = async (genres) => {
    setLoading(true);
    try {
      const animes = await fetchAnimeByGenres(genres);
      if (animes.length > 0) {
        const randomIndex = Math.floor(Math.random() * animes.length);
        setRecommendedAnime(animes[randomIndex]); // Seleciona um anime aleatório da lista
      } else {
        console.warn('Nenhum anime encontrado para os gêneros fornecidos.');
      }
    } catch (error) {
      console.error('Erro ao buscar animes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <Container maxWidth={false} disableGutters sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default', color: 'text.primary' }}>
        <Box sx={{ display: 'flex', flex: 1, width: '100%', height: '100%', flexDirection: { xs: 'column', sm: 'row' }, overflow: 'auto' }}>
          <Box sx={{ flex: { xs: '0 0 auto', sm: '0 0 25%' }, p: 2 }}>
            <GenreSelector onSelectGenres={handleSelectGenres} />
          </Box>
          <Box sx={{ flex: { xs: '0 0 auto', sm: '0 0 75%' }, display: 'flex', flexDirection: 'column', overflow: 'auto', maxWidth: '100%' }}>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <CircularProgress />
              </Box>
            ) : (
              recommendedAnime && (
                <AnimeCard
                  title={recommendedAnime.title.romaji}
                  imageUrl={recommendedAnime.coverImage.extraLarge}
                  description={recommendedAnime.description}
                  genres={recommendedAnime.genres}
                />
              )
            )}
          </Box>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
