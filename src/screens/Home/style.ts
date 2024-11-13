import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
  },

  categoryContainer: {
    marginBottom: 20,
  },

  categoryTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  movieThumbnail: {
    width: 120,
    height: 180,
    borderRadius: 5,
    marginRight: 10,
  },

  featuredContainer: {
    position: "relative",
    marginBottom: 20,
  },

  featuredImage: {
    width: "100%",
    height: 250,
  },

  overlay: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },

  featuredTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },

  playButton: {
    backgroundColor: "#E50914",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },

  infoButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
