import { gql, useQuery } from "@apollo/client";

const schema = gql`
  query GetTvShowDetails($getTvId: Int!) {
    getTvShowDetails(id: $getTvId) {
      adult
      backdrop_path
      genres {
        id
        name
      }
      first_air_date
      number_of_episodes
      number_of_seasons
      id
      origin_country
      name
      original_name
      overview
      popularity
      poster_path
      production_companies {
        id
        logo_path
        name
        origin_country
      }
      production_countries {
        iso_3166_1
        name
      }
      spoken_languages {
        english_name
        iso_639_1
        name
      }
      tagline
      vote_average
      vote_count
    }
  }
`;

const useTvShowDetail = (tvId: string) => {
  const query = useQuery(schema, {
    variables: { getTvId: Number(tvId) },
  });

  return { ...query, data: query.data?.getTvShowDetails };
};

export default useTvShowDetail;
