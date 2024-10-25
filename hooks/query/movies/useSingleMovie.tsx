import { gql, useQuery } from "@apollo/client";

const GET_MOVIE_DETAILS = gql`
  query GetMovieDetails($getMovieId: ID!) {
    getMovie(id: $getMovieId) {
      adult
      backdrop_path
      budget
      genres {
        id
        name
      }
      homepage
      id
      origin_country
      original_language
      original_title
      overview
      popularity
      poster_path
      production_companies {
        id
        logo_path
        name
        origin_country
      }
      production_countries {
        english_name
        iso_3166_1
        name
        native_name
      }
      release_date
      revenue
      runtime
      spoken_languages {
        english_name
        iso_639_1
        name
      }
      status
      tagline
      title
      video
      vote_average
      vote_count
    }
  }
`;

const useSingleMovie = (movieId: string) => {
  const query = useQuery(GET_MOVIE_DETAILS, {
    variables: { getMovieId: movieId },
  });

  return { ...query, data: query.data?.getMovie };
};

export default useSingleMovie;
