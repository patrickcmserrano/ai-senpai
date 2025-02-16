import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GenreSelector from './GenreSelector';

describe('GenreSelector', () => {
  const genres = ['Ação', 'Aventura', 'Comédia'];
  const onSelectGenres = jest.fn();

  it('deve renderizar os gêneros disponíveis', () => {
    const { getByLabelText } = render(<GenreSelector onSelectGenres={onSelectGenres} />);
    genres.forEach((genre) => {
      expect(getByLabelText(genre)).toBeInTheDocument();
    });
  });

  it('deve chamar onSelectGenres com os gêneros selecionados ao clicar em Confirmar', () => {
    const { getByLabelText, getByText } = render(<GenreSelector onSelectGenres={onSelectGenres} />);
    fireEvent.click(getByLabelText('Ação'));
    fireEvent.click(getByLabelText('Comédia'));
    fireEvent.click(getByText('Confirmar'));

    expect(onSelectGenres).toHaveBeenCalledWith(['Ação', 'Comédia']);
  });
});
