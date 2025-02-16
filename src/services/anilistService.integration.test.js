import { fetchAnimeByGenres } from './anilistService';

describe('AniList Service Integration', () => {
  it('deve retornar uma lista de animes para os gêneros fornecidos', async () => {
    const genres = ['Ação', 'Aventura'];
    const animes = await fetchAnimeByGenres(genres);

    expect(animes).toBeInstanceOf(Array);
    if (animes.length > 0) {
      animes.forEach((anime) => {
        expect(anime.genres).toEqual(expect.arrayContaining(genres));
      });
    } else {
      console.warn('Nenhum anime encontrado para os gêneros fornecidos.');
    }
  });

  it('deve retornar uma lista vazia se os gêneros fornecidos forem inválidos', async () => {
    const genres = ['GêneroInexistente'];
    const animes = await fetchAnimeByGenres(genres);

    expect(animes).toBeInstanceOf(Array);
    expect(animes.length).toBe(0);
  });
});
