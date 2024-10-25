import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

type Props = {
  title: string;
  handlePress?: () => void;
};

const HeaderStyledBtn = ({ title, handlePress }: Props) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text className="text-foreground rounded-full px-3 py-[6px] border border-grey_400">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderStyledBtn;
