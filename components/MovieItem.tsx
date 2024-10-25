import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {
  id: string;
  url: string;
};

const MovieItem = ({ id, url }: Props) => {
  const width = 220;
  const height = (width * 9) / 16;

  return (
    <Link href={`/movie/${id}`} key={id} className="mr-2">
      <View>
        <Image
          source={{ uri: url }}
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
};

export default MovieItem;
