import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GenreSelector from './GenreSelector';

describe('GenreSelector', () => {
  const genres = ['Ação', 'Aventura', 'Comédia'];
  const onSelectGenres = jest.fn();

  it('deve renderizar os gêneros disponíveis', () => {
    const { getByText } = render(<GenreSelector onSelectGenres={onSelectGenres} />);
    genres.forEach((genre) => {
      expect(getByText(genre)).toBeInTheDocument();
    });
  });

  it('deve chamar onSelectGenres com os gêneros selecionados ao clicar em Confirmar', () => {
    const { getByText } = render(<GenreSelector onSelectGenres={onSelectGenres} />);
    fireEvent.click(getByText('Ação'));
    fireEvent.click(getByText('Comédia'));
    fireEvent.click(getByText('Confirmar'));

    expect(onSelectGenres).toHaveBeenCalledWith(['Action', 'Comedy']);
  });
});
