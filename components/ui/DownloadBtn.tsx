import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const DownloadBtn = () => {
  return (
    <TouchableOpacity>
      <Text
        className="bg-grey_700 text-grey-400 text-center 
          w-full rounded-xl py-3 text-lg font-psemibold"
      >
        Download
      </Text>
    </TouchableOpacity>
  );
};

export default DownloadBtn;
