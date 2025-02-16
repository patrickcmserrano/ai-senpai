import { request, gql } from 'graphql-request';

const API_URL = 'https://graphql.anilist.co';

const query = gql`
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
          large
        }
        genres
      }
    }
  }
`;

export const fetchAnimeByGenres = async (genres) => {
  try {
    const variables = { genres };
    const response = await request(API_URL, query, variables);
    return response.Page.media;
  } catch (error) {
    console.error('Erro ao buscar animes:', error);
    throw error;
  }
};
