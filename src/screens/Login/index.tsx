import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import AntDesign from "@expo/vector-icons/AntDesign";

const EMAIL_PLACEHOLDER = "E-mail ou número de telefone";
const PASSWORD_PLACEHOLDER = "Senha";
const LOGIN_BUTTON_TEXT = "Entrar";
const HELP_TEXT = "Precisa de ajuda?";
const SIGNUP_PROMPT_TEXT = "Novo por aqui?";
const SIGNUP_LINK_TEXT = " Inscreva-se agora.";
const RECAPTCHA_TEXT =
  "O Acesso está protegido pelo Google reCAPTCHA para garantir que você não é um robô, saiba mais.";

const LoginScreen: React.FC = () => {
  const renderInputField = (placeholder: string, isSecure: boolean = false) => (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#aaa"
      style={styles.input}
      secureTextEntry={isSecure}
    />
  );

  const renderButton = (text: string, onPress?: () => void) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );

  const renderBackButton = () => (
    <TouchableOpacity style={styles.backButton}>
      <AntDesign name="arrowleft" size={24} color="#fff" />
    </TouchableOpacity>
  );

  const renderLogo = () => (
    <Image
      source={require("../../assets/netflix-logo.png")}
      style={styles.logo}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {renderBackButton()}
        {renderLogo()}
      </View>

      {renderInputField(EMAIL_PLACEHOLDER)}
      {renderInputField(PASSWORD_PLACEHOLDER, true)}

      {renderButton(LOGIN_BUTTON_TEXT)}

      <TouchableOpacity>
        <Text style={styles.helpText}>{HELP_TEXT}</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>{SIGNUP_PROMPT_TEXT}</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>{SIGNUP_LINK_TEXT}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.recaptchaText}>{RECAPTCHA_TEXT}</Text>
    </View>
  );
};

export default LoginScreen;
