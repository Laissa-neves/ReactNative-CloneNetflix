import React from "react";
import { View, Image } from "react-native";
import styles from "./style";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/netflix-logo.png")} style={styles.logo} />
    </View>
  );
};

export default Header;
