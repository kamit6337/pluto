import { gql } from "@apollo/client";

const popularMoviesSchema = gql`
  query GetPopularMovies($page: Int!) {
    getPopularMovies(page: $page) {
      adult
      backdrop_path
      genre_ids
      id
      original_language
      original_title
      overview
      popularity
      poster_path
      release_date
      title
      video
      vote_average
      vote_count
    }
  }
`;

export default popularMoviesSchema;
