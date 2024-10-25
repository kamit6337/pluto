import { Text, View } from "react-native";

type Props = {
  title: string;
  list: Object[];
  textShow?: string;
};

const DetailFromList = ({ title, list, textShow = "name" }: Props) => {
  if (!list || list.length === 0) return null;

  return (
    <View className="border-b border-grey_700 pt-7 pb-5">
      <Text className="text-foreground font-psemibold text-base">{title}</Text>
      <View className="flex-row items-center flex-wrap gap-x-2">
        {list.map((item, i, arr) => {
          const lastItem = arr.length - 1 === i;
          return (
            <Text key={i} className="text-grey_400 font-psemibold text-sm">
              {textShow ? item[textShow] : item}
              {lastItem ? "" : ","}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default DetailFromList;
