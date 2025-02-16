import React, { useState } from 'react';
import GenreSelector from './components/GenreSelector';
import AnimeCard from './components/AnimeCard';

function App() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [recommendedAnime, setRecommendedAnime] = useState(null);

  const handleSelectGenres = (genres) => {
    setSelectedGenres(genres);
    // Aqui você pode adicionar lógica para buscar animes com base nos gêneros selecionados
    // Exemplo fictício de anime recomendado
    setRecommendedAnime({
      title: 'Naruto',
      imageUrl: 'https://example.com/naruto.jpg',
      description: 'Um jovem ninja que busca reconhecimento e sonha em se tornar o Hokage, o líder de sua vila.',
      genres: ['Ação', 'Aventura'],
    });
  };

  return (
    <div className="App">
      <h1>Bem-vindo ao AI Senpai</h1>
      <GenreSelector onSelectGenres={handleSelectGenres} />
      {recommendedAnime && (
        <AnimeCard
          title={recommendedAnime.title}
          imageUrl={recommendedAnime.imageUrl}
          description={recommendedAnime.description}
          genres={recommendedAnime.genres}
        />
      )}
    </div>
  );
}

export default App;
