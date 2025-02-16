# AnimeCard

O componente `AnimeCard` exibe informações detalhadas sobre um anime recomendado.

## Props

- `title`: Título do anime.
- `imageUrl`: URL da imagem do anime.
- `description`: Descrição do anime.
- `genres`: Array de gêneros do anime.

## Exemplo de Uso

```javascript
import React from 'react';
import AnimeCard from './components/AnimeCard';

function App() {
  const recommendedAnime = {
    title: 'Naruto',
    imageUrl: 'https://example.com/naruto.jpg',
    description: 'Um jovem ninja que busca reconhecimento e sonha em se tornar o Hokage, o líder de sua vila.',
    genres: ['Ação', 'Aventura'],
  };

  return (
    <div className="App">
      <h1>Bem-vindo ao AI Senpai</h1>
      <AnimeCard
        title={recommendedAnime.title}
        imageUrl={recommendedAnime.imageUrl}
        description={recommendedAnime.description}
        genres={recommendedAnime.genres}
      />
    </div>
  );
}

export default App;
```
