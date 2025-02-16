import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, CircularProgress, Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GenreSelector from './components/GenreSelector';
import AnimeCard from './components/AnimeCard';
import { fetchAnimeByGenres } from './services/anilistService';

function App() {
  const [recommendedAnime, setRecommendedAnime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSelectGenres = async (genres) => {
    setLoading(true);
    setDrawerOpen(false); // Fecha o Drawer ao enviar a requisição
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
          <Box sx={{ display: { xs: 'block', sm: 'none' }, position: 'absolute', top: 0, left: 0 }}>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
              <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <GenreSelector onSelectGenres={handleSelectGenres} />
          </Drawer>
          <Box sx={{ flex: { xs: '0 0 auto', sm: '0 0 25%' }, display: { xs: 'none', sm: 'flex' }, flexDirection: 'column' }}>
            <GenreSelector onSelectGenres={handleSelectGenres} />
          </Box>
          <Box sx={{ flex: { xs: '0 0 auto', sm: '0 0 75%' }, display: 'flex', flexDirection: 'column' }}>
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
