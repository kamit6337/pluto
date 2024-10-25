import { gql } from "@apollo/client";

const similarSchema = gql`
  query GetSimilarMovies($page: Int!, $id: Int!) {
    getSimilarMovies(page: $page, id: $id) {
      backdrop_path
      id
    }
  }
`;

export default similarSchema;
