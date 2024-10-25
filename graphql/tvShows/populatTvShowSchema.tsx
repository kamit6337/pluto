import { gql } from "@apollo/client";

const populatTvShowSchema = gql`
  query GET_POPULAR_TVSHOWS($page: Int!) {
    getPopularTvShows(page: $page) {
      backdrop_path
      id
    }
  }
`;
export default populatTvShowSchema;
