import ImageList from "@/components/ImageList";
import { movieImages, movieReviews } from "@/graphql/movie/query";
import { useState } from "react";
import { Text, View } from "react-native";
import Details from "./details";
import ReviewList from "@/components/ReviewList";

const IMAGES = "images";
const REVIEWS = "reviews";
const DETAILS = "details";

const Additional = ({ movieId }) => {
  const [activeTab, setActiveTab] = useState(IMAGES);

  return (
    <View>
      <View className="w-full flex-row justify-between border-b border-grey_700">
        <Text
          onPress={() => setActiveTab(IMAGES)}
          className={`${
            activeTab === IMAGES ? "border-b" : ""
          } flex-1 text-center text-foreground  font-psemibold p-2  border-foreground`}
        >
          Images
        </Text>
        <Text
          onPress={() => setActiveTab(REVIEWS)}
          className={`${
            activeTab === REVIEWS ? "border-b" : ""
          } flex-1 text-center  text-foreground font-psemibold p-2 border-foreground`}
        >
          Reviews
        </Text>
        <Text
          onPress={() => setActiveTab(DETAILS)}
          className={`${
            activeTab === DETAILS ? "border-b" : ""
          } flex-1 text-center  text-foreground font-psemibold p-2 border-foreground`}
        >
          Details
        </Text>
      </View>
      {activeTab === IMAGES && <ImageList item={movieImages} id={movieId} />}
      {activeTab === REVIEWS && <ReviewList id={movieId} item={movieReviews} />}
      {activeTab === DETAILS && <Details id={movieId} />}
    </View>
  );
};

export default Additional;
