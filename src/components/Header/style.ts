import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: "#000",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 45,
    resizeMode: "contain",
    marginLeft: 20,
  },
});
