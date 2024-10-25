import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundColor: {
    color: "#10100F",
  },
  container: {
    flex: 1,
    backgroundColor: "#10100F", // Global background color
  },
  insetShadow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  text: {
    color: "#FCF9F8", // Global text color
  },
  placeholder_text_color: {
    color: "#374151",
  },
  auth_title: {
    fontSize: 30,
    fontFamily: "Poppins-SemiBold",
    color: "#FCF9F8",
  },
  auth_input: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#374151",
    padding: 12,
    fontSize: 18,
    borderRadius: 16,
    color: "#FCF9F8",
  },
});

export default styles;
