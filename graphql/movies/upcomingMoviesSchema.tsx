import { gql } from "@apollo/client";

const upcomingMoviesSchema = gql`
  query GetUpcomingMovies($page: Int!) {
    getUpcomingMovies(page: $page) {
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

export default upcomingMoviesSchema;
