import { fetchAnimeByGenres } from './anilistService';
import { request, gql } from 'graphql-request';

jest.mock('graphql-request');

describe('fetchAnimeByGenres', () => {
  it('deve retornar uma lista de animes para os gêneros fornecidos', async () => {
    const mockResponse = {
      Page: {
        media: [
          {
            id: 1,
            title: { romaji: 'Naruto', english: 'Naruto', native: 'ナルト' },
            description: 'Um jovem ninja que busca reconhecimento e sonha em se tornar o Hokage, o líder de sua vila.',
            episodes: 220,
            status: 'FINISHED',
            coverImage: { extraLarge: 'https://example.com/naruto.jpg' },
            genres: ['Ação', 'Aventura'],
          },
        ],
      },
    };

    request.mockResolvedValue(mockResponse);

    const genres = ['Ação', 'Aventura'];
    const animes = await fetchAnimeByGenres(genres);

    expect(animes).toEqual(mockResponse.Page.media);
    expect(request).toHaveBeenCalledWith(
      'https://graphql.anilist.co',
      gql`
        query ($genres: [String]) {
          Page {
            media(type: ANIME, genre_in: $genres, sort: POPULARITY_DESC) {
              id
              title {
                romaji
                english
                native
              }
              description
              episodes
              status
              coverImage {
                extraLarge
              }
              genres
            }
          }
        }
      `,
      { genres }
    );
  });

  it('deve lançar um erro se a requisição falhar', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    request.mockRejectedValue(new Error('Erro na requisição'));

    const genres = ['Ação', 'Aventura'];

    await expect(fetchAnimeByGenres(genres)).rejects.toThrow('Erro na requisição');

    consoleErrorSpy.mockRestore();
  });
});
