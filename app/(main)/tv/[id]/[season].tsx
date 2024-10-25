import { View, Text, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useTvShowDetail from "@/hooks/query/tv/useTvShowDetail";
import useFixedQuery from "@/hooks/query/fixed/useFixedQuery";
import { FlatList } from "react-native";
import MediaHeader from "@/components/headers/MediaHeader";
import { Dimensions } from "react-native";
import PlayBtn from "@/components/ui/PlayBtn";
import DownloadBtn from "@/components/ui/DownloadBtn";
import StyledDescription from "@/components/ui/StyledDescription";
import { MaterialIcons } from "@expo/vector-icons";
import reverseDate from "@/utils/javascript/reverseDate";
import DropDownPicker from "react-native-dropdown-picker";

const TvDetail = () => {
  const { id, season } = useLocalSearchParams<{ id: string; season: string }>();
  const { data: fixed } = useFixedQuery();
  const screenWidth = Dimensions.get("window").width;
  const height = (screenWidth * 9) / 16;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const { loading, error, data: tv } = useTvShowDetail(id);

  useEffect(() => {
    if (tv?.number_of_seasons) {
      const arr = new Array(number_of_seasons).fill("");
      const options = arr.map((_, index) => {
        return { label: `Season ${index + 1}`, value: index + 1 };
      });
      setItems(options);
    }
  }, [tv]);

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
    name,
    overview,
    first_air_date,
    vote_average,
    genres,
    spoken_languages,
    number_of_seasons,
  } = tv;

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
                {name}
              </Text>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{ width: 150 }}
                placeholder="Select a language"
              />
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
                  {reverseDate(first_air_date)}
                </Text>
                <Text className="text-grey_400 font-psemibold">min</Text>
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
            <View className="h-96" />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default TvDetail;
