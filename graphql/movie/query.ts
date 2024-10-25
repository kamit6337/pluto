import movieImagesSchema from "./movieImagesSchema";
import movieReviewSchema from "./movieReviewSchema";
import recommendationSchema from "./recommendationSchema";
import similarSchema from "./similarSchema";

const MOVIE = "movie";

export const movieRecommendation = {
  schema: recommendationSchema,
  dataQuery: "getMovieRecommendations",
  name: "Recommended Movies",
  media: MOVIE,
};

export const movieSimilar = {
  schema: similarSchema,
  dataQuery: "getSimilarMovies",
  name: "Similar Movies",
  media: MOVIE,
};

export const movieImages = {
  schema: movieImagesSchema,
  dataQuery: "getMovieImages",
};

export const movieReviews = {
  schema: movieReviewSchema,
  dataQuery: "getMovieReviews",
};
