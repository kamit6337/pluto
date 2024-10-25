import nowPlayingSchema from "../movies/nowPlayingSchema";
import popularMoviesSchema from "../movies/popularMoviesSchema";
import topRatedMoviesSchema from "../movies/topRatedMoviesSchema";
import upcomingMoviesSchema from "../movies/upcomingMoviesSchema";
import airingTodaySchema from "../tvShows/airingTodaySchema";
import onTheAirSchema from "../tvShows/onTheAirSchema";
import populatTvShowSchema from "../tvShows/populatTvShowSchema";
import topRatedTvShowSchema from "../tvShows/topRatedTvShowSchema";

const MOVIE = "movie";
const TV = "tv";

const queryList = [
  {
    id: 1,
    schema: nowPlayingSchema,
    dataQuery: "getNowPlayingMovies",
    name: "Now Playing",
    media: MOVIE,
  },
  {
    id: 2,
    schema: popularMoviesSchema,
    dataQuery: "getPopularMovies",
    name: "Popular Movies",
    media: MOVIE,
  },
  {
    id: 3,
    schema: topRatedMoviesSchema,
    dataQuery: "getTopRatedMovies",
    name: "Top Rated Movies",
    media: MOVIE,
  },
  {
    id: 4,
    schema: upcomingMoviesSchema,
    dataQuery: "getUpcomingMovies",
    name: "Upcoming Movies",
    media: MOVIE,
  },
  {
    id: 5,
    schema: airingTodaySchema,
    dataQuery: "getAiringTodayTvShows",
    name: "Airing Today Tv Shows",
    media: TV,
  },
  {
    id: 6,
    schema: onTheAirSchema,
    dataQuery: "getOnTheAirTvShows",
    name: "On The Air TV Shows",
    media: TV,
  },
  {
    id: 7,
    schema: populatTvShowSchema,
    dataQuery: "getPopularTvShows",
    name: "Popular TV Shows",
    media: TV,
  },
  {
    id: 8,
    schema: topRatedTvShowSchema,
    dataQuery: "getTopRatedTvShows",
    name: "Top Rated TV Shows",
    media: TV,
  },
];

export default queryList;
