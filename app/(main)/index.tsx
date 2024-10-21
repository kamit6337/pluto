import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/sign-up">sign Up</Link>
      <Link href="/verify-signup">Verify signup</Link>
    </View>
  );
}
