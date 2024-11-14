import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./style";

const icon_size = 20;
const icon_color = "#FFF";

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <TouchableOpacity>
          <AntDesign name="menu-fold" size={icon_size} color={icon_color} />
        </TouchableOpacity>
        <Image
          source={require("../../assets/netflix-logo.png")}
          style={styles.logo}
        />
      </View>
      <TouchableOpacity>
        <AntDesign name="search1" size={icon_size} color={icon_color} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
