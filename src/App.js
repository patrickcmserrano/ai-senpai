import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
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
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          Bem-vindo ao AI Senpai
        </Typography>
        <Switch>
          <Route path="/" exact>
            <GenreSelector onSelectGenres={handleSelectGenres} />
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <CircularProgress />
              </Box>
            ) : (
              recommendedAnime && (
                <AnimeCard
                  title={recommendedAnime.title.romaji}
                  imageUrl={recommendedAnime.coverImage.large}
                  description={recommendedAnime.description}
                  genres={recommendedAnime.genres}
                />
              )
            )}
          </Route>
          {/* Adicione outras rotas aqui conforme necessário */}
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
