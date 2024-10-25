import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const PlayBtn = () => {
  return (
    <TouchableOpacity>
      <Text
        className="bg-foreground text-background text-center 
      w-full rounded-xl py-3 text-lg font-psemibold"
      >
        Play
      </Text>
    </TouchableOpacity>
  );
};

export default PlayBtn;
