import { gql, useQuery } from "@apollo/client";

const schema = gql`
  query GetMovieRecommendations($page: Int!, $id: Int!) {
    getMovieRecommendations(page: $page, id: $id) {
      backdrop_path
      id
    }
  }
`;

const useMovieRecommendations = () => {
  const query = useQuery(schema);

  return query;
};

export default useMovieRecommendations;
