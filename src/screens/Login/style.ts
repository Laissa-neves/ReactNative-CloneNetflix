import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 220,
    height: 60,
    alignSelf: "center",
    marginBottom: 30,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 18,
    textAlign: "center",
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#333",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: "#fff",
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#e50914",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
  },

  optionText: {
    color: "#aaa",
    fontSize: 14,
  },

  helpText: {
    color: "#aaa",
    fontSize: 14,
    textDecorationLine: "underline",
  },

  signupContainer: {
    flexDirection: "row",
    marginTop: 30,
  },

  signupText: {
    color: "#aaa",
    fontSize: 14,
  },

  signupLink: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
