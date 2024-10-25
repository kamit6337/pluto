import { gql, useQuery } from "@apollo/client";

const GET_FIXED = gql`
  query Get_Fixed {
    getFixed {
      imageDetail {
        base_url
        secure_base_url
        backdrop_sizes
        logo_sizes
        poster_sizes
        profile_sizes
        still_sizes
      }
      genres {
        id
        name
      }
      countries {
        iso_3166_1
        english_name
        native_name
        name
      }
    }
  }
`;

const useFixedQuery = () => {
  const query = useQuery(GET_FIXED);

  return { ...query, data: query.data?.getFixed };
};

export default useFixedQuery;
