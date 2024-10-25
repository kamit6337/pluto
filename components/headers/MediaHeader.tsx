import { View, Text, Image } from "react-native";
import React from "react";
import My_Icons from "@/assets/icons/icon";
import HeaderStyledBtn from "../HeaderStyledBtn";

const MediaHeader = ({ showAll = true }) => {
  return (
    <View
      className={`bg-background py-3 px-5  ${
        showAll && "flex-row justify-between"
      }`}
    >
      {showAll && (
        <View className="space-y-3">
          <Text className="text-foreground">Pluto</Text>
          <View className="flex-row gap-2 items-center">
            <View>
              <HeaderStyledBtn title="Movies" />
            </View>
            <View>
              <HeaderStyledBtn title="TV shows" />
            </View>

            <View>
              <HeaderStyledBtn title="Peoples" />
            </View>
          </View>
        </View>
      )}

      <View className={!showAll ? "self-end" : ""}>
        <Text className="text-sky_400">{My_Icons.profile}</Text>
      </View>
    </View>
  );
};

export default MediaHeader;
