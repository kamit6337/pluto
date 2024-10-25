import HorizontalMoviesAndTvShows from "@/components/HorizontalMoviesAndTvShows";
import { movieRecommendation, movieSimilar } from "@/graphql/movie/query";
import { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";

const RECOMMENDATIONS = "Recommendations";
const SIMILAR = "Similar";

const AdditionalMovies = ({ movieId }) => {
  const [activeTab, setActiveTab] = useState(RECOMMENDATIONS);

  return (
    <View>
      <View className="w-full flex-row justify-between border-b border-grey_700">
        <Text
          onPress={() => setActiveTab(RECOMMENDATIONS)}
          className={`${
            activeTab === RECOMMENDATIONS ? "border-b" : ""
          } flex-1 text-center text-foreground  font-psemibold p-2   border-foreground`}
        >
          Recommendations
        </Text>
        <Text
          onPress={() => setActiveTab(SIMILAR)}
          className={`${
            activeTab === SIMILAR ? "border-b" : ""
          } flex-1 text-center  text-foreground font-psemibold p-2 border-foreground`}
        >
          Similar
        </Text>
      </View>
      {activeTab === RECOMMENDATIONS && (
        <HorizontalMoviesAndTvShows
          item={movieRecommendation}
          id={Number(movieId)}
          showTitle={false}
        />
      )}
      {activeTab === SIMILAR && (
        <HorizontalMoviesAndTvShows
          item={movieSimilar}
          id={Number(movieId)}
          showTitle={false}
        />
      )}
    </View>
  );
};

export default AdditionalMovies;
