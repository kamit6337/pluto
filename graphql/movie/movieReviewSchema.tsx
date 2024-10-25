import { gql } from "@apollo/client";

const movieReviewSchema = gql`
  query GetMovieReviews($id: Int!) {
    getMovieReviews(id: $id) {
      author
      author_details {
        name
        username
        avatar_path
        rating
      }
      content
      created_at
      id
      updated_at
      url
    }
  }
`;

export default movieReviewSchema;
