import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const DownloadBtn = () => {
  return (
    <TouchableOpacity>
      <Text
        className="bg-grey_700 text-foreground text-center 
          w-full rounded-xl py-3 text-base font-psemibold"
      >
        Download
      </Text>
    </TouchableOpacity>
  );
};

export default DownloadBtn;
