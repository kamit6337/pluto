import { gql } from "@apollo/client";

const movieImagesSchema = gql`
  query GetMovieImages($id: Int!) {
    getMovieImages(id: $id) {
      ratio
      path
    }
  }
`;

export default movieImagesSchema;
