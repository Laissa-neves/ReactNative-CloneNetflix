import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./style";

const MovieCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.image}
      />
      <Text style={styles.title}>Filme Exemplo</Text>
    </View>
  );
};

export default MovieCard;
