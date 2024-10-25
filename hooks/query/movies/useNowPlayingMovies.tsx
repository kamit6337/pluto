import { gql, useQuery } from "@apollo/client";

const GET_NOW_PALYING_MOVIES = gql`
  query GetNowPlayingMovies {
    getNowPlaying {
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

const useNowPlayingMovies = () => {
  const query = useQuery(GET_NOW_PALYING_MOVIES);

  return { ...query, data: query.data?.getNowPlaying };
};

export default useNowPlayingMovies;
