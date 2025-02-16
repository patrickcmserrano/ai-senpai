# GenreSelector

O componente `GenreSelector` permite aos usuários selecionar seus gêneros de animes preferidos.

## Props

- `onSelectGenres`: Função chamada quando o usuário confirma a seleção dos gêneros. Recebe um array de gêneros selecionados como argumento.

## Exemplo de Uso

```javascript
import React, { useState } from 'react';
import GenreSelector from './components/GenreSelector';

function App() {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleSelectGenres = (genres) => {
    setSelectedGenres(genres);
    // Aqui você pode adicionar lógica para buscar animes com base nos gêneros selecionados
  };

  return (
    <div className="App">
      <h1>Bem-vindo ao AI Senpai</h1>
      <GenreSelector onSelectGenres={handleSelectGenres} />
      {/* Aqui você pode renderizar os animes recomendados com base nos gêneros selecionados */}
    </div>
  );
}

export default App;
```
