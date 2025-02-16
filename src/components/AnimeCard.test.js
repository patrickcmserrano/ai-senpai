import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnimeCard from './AnimeCard';

describe('AnimeCard', () => {
  const props = {
    title: 'Naruto',
    imageUrl: 'https://example.com/naruto.jpg',
    description: 'Um jovem ninja que busca reconhecimento e sonha em se tornar o Hokage, o líder de sua vila.',
    genres: ['Ação', 'Aventura'],
  };

  it('deve renderizar o título do anime', () => {
    const { getByText } = render(<AnimeCard {...props} />);
    expect(getByText('Naruto')).toBeInTheDocument();
  });

  it('deve renderizar a imagem do anime', () => {
    const { getByAltText } = render(<AnimeCard {...props} />);
    expect(getByAltText('Naruto')).toHaveAttribute('src', 'https://example.com/naruto.jpg');
  });

  it('deve renderizar a descrição do anime', () => {
    const { getByText } = render(<AnimeCard {...props} />);
    expect(getByText(props.description)).toBeInTheDocument();
  });

  it('deve renderizar os gêneros do anime', () => {
    const { getByText } = render(<AnimeCard {...props} />);
    props.genres.forEach((genre) => {
      expect(getByText(genre)).toBeInTheDocument();
    });
  });
});
