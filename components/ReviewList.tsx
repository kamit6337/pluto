import { View, Text, ActivityIndicator, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import useFixedQuery from "@/hooks/query/fixed/useFixedQuery";
import createProfileAvatar from "@/utils/javascript/createProfileAvatar";
import ReviewContent from "./ui/ReviewContent";

const ReviewList = ({ item, id }) => {
  const { schema, dataQuery } = item;
  const { data: fixed } = useFixedQuery();

  const { loading, error, data } = useQuery(schema, {
    variables: { id: Number(id) },
  });

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

  const reviews = data[dataQuery];

  if (reviews?.length === 0) {
    return (
      <View className="px-5 py-10">
        <Text className="text-foreground font-psemibold text-lg">
          Customer review doesn't present
        </Text>
      </View>
    );
  }

  return (
    <View className="p-5 pt-0">
      <FlatList
        data={reviews}
        nestedScrollEnabled={true}
        renderItem={({ item }) => {
          const {
            content,
            id,
            author,
            author_details: { name, username, avatar_path, rating },
          } = item;

          let photoUrl = null;
          if (avatar_path) {
            photoUrl = `${fixed.imageDetail.secure_base_url}original${avatar_path}`;
          } else {
            photoUrl = createProfileAvatar(author);
          }

          return (
            <View key={id} className="pt-7 pb-5 border-b border-grey_700 gap-2">
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-2 items-center">
                  {photoUrl && (
                    <Image
                      source={{ uri: photoUrl }}
                      resizeMode="cover"
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <Text className="text-grey_400">{author}</Text>
                </View>
                {rating && (
                  <View className="justify-center items-center h-10 w-10 rounded-full bg-grey_700">
                    <Text className="text-foreground">{rating}</Text>
                  </View>
                )}
              </View>
              <View>
                <ReviewContent>{content}</ReviewContent>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ReviewList;
