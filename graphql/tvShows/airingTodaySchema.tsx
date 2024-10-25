import { gql } from "@apollo/client";

const airingTodaySchema = gql`
  query GET_AIRING_TODAY($page: Int!) {
    getAiringTodayTvShows(page: $page) {
      backdrop_path
      id
    }
  }
`;
export default airingTodaySchema;
