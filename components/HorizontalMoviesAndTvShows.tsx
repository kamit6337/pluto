import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import useFixedQuery from "@/hooks/query/fixed/useFixedQuery";
import { useQuery } from "@apollo/client";
import MovieItem from "./MovieItem";
import TvItem from "./TvItem";

const MOVIE = "movie";
const TV = "tv";

const HorizontalMoviesAndTvShows = ({
  item,
  onRefetchAvailable,
  id = null,
  showTitle = true,
}) => {
  const { schema, dataQuery, name, media } = item;
  const { data: fixed } = useFixedQuery();
  const [page, setPage] = useState(1);

  const { loading, error, data, refetch, fetchMore, networkStatus } = useQuery(
    schema,
    {
      variables: { page, id },
      // notifyOnNetworkStatusChange: true, // Allows tracking loading state accurately
    }
  );

  useEffect(() => {
    if (onRefetchAvailable) {
      onRefetchAvailable(refetch);
    }
  }, [refetch]);

  if (loading) {
    return <ActivityIndicator className="h-32 justify-center items-center" />;
  }

  if (error?.message) {
    return (
      <View className="h-32 justify-center items-center">
        <Text className="text-foreground">{error.message}</Text>
      </View>
    );
  }

  const mediaData = data[dataQuery];
  const mediaList = mediaData.filter((item) => !!item.backdrop_path);

  return (
    <View className="px-3 py-6 space-y-2">
      {showTitle && (
        <View>
          <Text className="text-foreground text-lg font-bold ml-2">{name}</Text>
        </View>
      )}
      <FlatList
        data={mediaList}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const { backdrop_path, id } = item;

          const photoUrl = `${fixed.imageDetail.secure_base_url}w300${backdrop_path}`;

          if (media === MOVIE) {
            return <MovieItem id={id} url={photoUrl} />;
          }

          if (media === TV) {
            return <TvItem id={id} url={photoUrl} />;
          }

          return null;
        }}
      />
    </View>
  );
};

export default HorizontalMoviesAndTvShows;
