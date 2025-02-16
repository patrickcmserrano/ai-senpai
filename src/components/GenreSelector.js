import React, { useState } from 'react';

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
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(genre)
        ? prevSelectedGenres.filter((g) => g !== genre)
        : [...prevSelectedGenres, genre]
    );
  };

  const handleSubmit = () => {
    const adaptedGenres = selectedGenres.map(genre => genreMap[genre]);
    onSelectGenres(adaptedGenres);
  };

  return (
    <div>
      <h2>Selecione seus gêneros preferidos</h2>
      <div>
        {genres.map((genre) => (
          <label key={genre}>
            <input
              type="checkbox"
              value={genre}
              onChange={() => handleGenreChange(genre)}
            />
            {genre}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit}>Confirmar</button>
    </div>
  );
}

export default GenreSelector;
