import { gql } from "@apollo/client";

const onTheAirSchema = gql`
  query GET_ON_THE_AIR($page: Int!) {
    getOnTheAirTvShows(page: $page) {
      backdrop_path
      id
    }
  }
`;

export default onTheAirSchema;
