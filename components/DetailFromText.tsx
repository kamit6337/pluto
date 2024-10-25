import { Text, View } from "react-native";

type Props = {
  title: string;
  text: string | null;
};

const DetailFromText = ({ title, text }: Props) => {
  if (!text) return null;

  return (
    <View className="border-b border-grey_700 pt-7 pb-5">
      <Text className="text-foreground font-psemibold text-base">{title}</Text>
      <Text className="text-grey_400 font-psemibold text-sm">{text}</Text>
    </View>
  );
};

export default DetailFromText;
