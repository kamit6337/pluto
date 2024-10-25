import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  children: React.ReactNode;
};

const StyledDescription = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text
        className="text-foreground font-psemibold leading-5 tracking-wider"
        numberOfLines={isExpanded ? undefined : 3} // When expanded, show all lines
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default StyledDescription;
