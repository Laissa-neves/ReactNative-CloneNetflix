import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";

const LoginScreen: React.FC = () => {
  const renderInput = (placeholder: string, isSecure: boolean = false) => (
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

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/netflix-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Entrar</Text>

      {renderInput("Email ou número de telefone")}
      {renderInput("Senha", true)}

      {renderButton("Entrar")}

      <View style={styles.optionsContainer}>
        <Text style={styles.optionText}>Lembre-se de mim</Text>
        <TouchableOpacity>
          <Text style={styles.helpText}>Precisa de ajuda?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Novo por aqui?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}> Assine agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
