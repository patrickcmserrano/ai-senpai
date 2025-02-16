import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GenreSelector from './components/GenreSelector';
import AnimeCard from './components/AnimeCard';
import { fetchAnimeByGenres } from './services/anilistService';

function App() {
  const [recommendedAnime, setRecommendedAnime] = useState(null);

  const handleSelectGenres = async (genres) => {
    try {
      const animes = await fetchAnimeByGenres(genres);
      if (animes.length > 0) {
        setRecommendedAnime(animes[0]); // Seleciona o primeiro anime da lista
      } else {
        console.warn('Nenhum anime encontrado para os gêneros fornecidos.');
      }
    } catch (error) {
      console.error('Erro ao buscar animes:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <h1>Bem-vindo ao AI Senpai</h1>
        <Switch>
          <Route path="/" exact>
            <GenreSelector onSelectGenres={handleSelectGenres} />
            {recommendedAnime && (
              <AnimeCard
                title={recommendedAnime.title.romaji}
                imageUrl={recommendedAnime.coverImage.large}
                description={recommendedAnime.description}
                genres={recommendedAnime.genres}
              />
            )}
          </Route>
          {/* Adicione outras rotas aqui conforme necessário */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
