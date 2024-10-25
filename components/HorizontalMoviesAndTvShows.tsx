import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import useFixedQuery from "@/hooks/query/fixed/useFixedQuery";
import { Link } from "expo-router";
import { useQuery } from "@apollo/client";

const HorizontalMoviesAndTvShows = ({
  item,
  onRefetchAvailable,
  id = null,
  showTitle = true,
}) => {
  const { schema, dataQuery, name } = item;
  const { data: fixed } = useFixedQuery();
  const width = 220;
  const height = (width * 9) / 16;
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="text-white">{error.message}</Text>
      </View>
    );
  }

  const mediaList = data[dataQuery];

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

          return (
            <Link href={`/movie/${id}`} key={id} className="mr-2">
              <View>
                <Image
                  source={{ uri: photoUrl }}
                  resizeMode="cover"
                  style={{
                    width: width,
                    height: height,
                  }}
                  className="rounded-xl"
                />
              </View>
            </Link>
          );
        }}
      />
    </View>
  );
};

export default HorizontalMoviesAndTvShows;
