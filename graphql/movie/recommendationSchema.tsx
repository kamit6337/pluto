import { gql } from "@apollo/client";

const recommendationSchema = gql`
  query GetMovieRecommendations($page: Int!, $id: Int!) {
    getMovieRecommendations(page: $page, id: $id) {
      backdrop_path
      id
    }
  }
`;

export default recommendationSchema;
