import {
  View,
  Text,
  ActivityIndicator,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useSingleMovie from "@/hooks/query/movie/useSingleMovie";
import useFixedQuery from "@/hooks/query/fixed/useFixedQuery";
import MediaHeader from "@/components/headers/MediaHeader";
import PlayBtn from "@/components/ui/PlayBtn";
import DownloadBtn from "@/components/ui/DownloadBtn";
import StyledDescription from "@/components/ui/StyledDescription";
import reverseDate from "@/utils/javascript/reverseDate";
import AdditionalMovies from "./AdditionalMovies";
import { MaterialIcons } from "@expo/vector-icons";
import Additional from "./Additional";

const MovieDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: fixed } = useFixedQuery();
  const screenWidth = Dimensions.get("window").width;
  const height = (screenWidth * 9) / 16;

  const { loading, error, data: movie } = useSingleMovie(id);

  if (loading) {
    return <ActivityIndicator className="flex-1 justify-center items-center" />;
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
        <Text>{error.message}</Text>
      </View>
    );
  }

  const {
    backdrop_path,
    title,
    overview,
    release_date,
    runtime,
    vote_average,
    genres,
    spoken_languages,
  } = movie;

  const photoUrl = `${fixed.imageDetail.secure_base_url}w780${backdrop_path}`;

  return (
    <SafeAreaView className="bg-background flex-1">
      <FlatList
        data={[]}
        renderItem={() => null}
        ListHeaderComponent={() => (
          <View>
            <MediaHeader showAll={false} />
            <View
              style={{
                position: "relative",
              }}
            >
              <Image
                source={{ uri: photoUrl }}
                resizeMode="cover"
                style={{
                  width: screenWidth,
                  height: height,
                }}
              />
            </View>

            <View className="p-4 space-y-2">
              <Text className="text-foreground text-3xl font-psemibold tracking-widest">
                {title}
              </Text>
              <View>
                <PlayBtn />
              </View>
              <View>
                <DownloadBtn />
              </View>
              <View>
                <StyledDescription>{overview}</StyledDescription>
              </View>
              <FlatList
                data={genres}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <Text className="text-foreground font-psemibold mx-1">
                    {item.name}
                  </Text>
                )}
                ItemSeparatorComponent={() => (
                  <View className="mx-1 items-center justify-center">
                    <MaterialIcons
                      name="fiber-manual-record"
                      size={8}
                      color="white"
                    />
                  </View>
                )}
                showsHorizontalScrollIndicator={false}
              />

              <View className=" flex-row items-center gap-2">
                <Text className="text-grey_400 font-psemibold">
                  {reverseDate(release_date)}
                </Text>
                <Text className="text-grey_400 font-psemibold">
                  {runtime} min
                </Text>
              </View>
              <View>
                <Text className="text-sky_400 font-psemibold">Languages</Text>
                <View className="flex-row items-center gap-1">
                  <Text className="text-grey_400 font-psemibold">Audio</Text>
                  <Text className="text-grey_400 font-psemibold">
                    ({spoken_languages?.length})
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            <View>
              <AdditionalMovies movieId={id} />
            </View>
            <View>
              <Additional movieId={id} />
            </View>
            <View className="h-96" />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default MovieDetailScreen;
