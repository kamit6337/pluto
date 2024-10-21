import styles from "@/styles/styles";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  handlePress: () => void;
};

const AuthStyledBtn = ({ title, handlePress }: Props) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text
        style={styles.text}
        className="bg-sky_400 py-4 text-center rounded-2xl font-psemibold "
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AuthStyledBtn;
