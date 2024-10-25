import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

type Props = {
  children: React.ReactNode;
};

const StyledText = styled(Text);

const StyledDescription = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <StyledText
        className="text-foreground font-psemibold leading-5 tracking-wider"
        numberOfLines={isExpanded ? undefined : 3} // When expanded, show all lines
      >
        {children}
      </StyledText>
    </TouchableOpacity>
  );
};

export default StyledDescription;
