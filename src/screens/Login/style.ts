import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 90,
  },

  backButton: {
    marginRight: 10,
  },

  logo: {
    width: 130,
    height: 70,
    resizeMode: "contain",
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
    borderColor: "#fff",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "transparent",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  helpText: {
    color: "#aaa",
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
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

  recaptchaText: {
    color: "#aaa",
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
