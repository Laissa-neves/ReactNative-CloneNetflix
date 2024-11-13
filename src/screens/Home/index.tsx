import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { categories } from "../../Mock/Data";
import { images } from "../../Mock/image";

const carouselImages = [
  images.movie4,
  images.movie1,
  images.movie2,
  images.movie7,
  images.movie3,
  images.movie10,
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <FeaturedSection currentImage={carouselImages[currentIndex]} />
      {categories.map((category, index) => (
        <CategorySection
          key={index}
          title={category.title}
          images={category.data}
        />
      ))}
    </ScrollView>
  );
};

interface FeaturedSectionProps {
  currentImage: any;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ currentImage }) => (
  <View style={styles.featuredContainer}>
    <Image source={currentImage} style={styles.featuredImage} />
    <View style={styles.overlay}>
      <Text style={styles.featuredTitle}>Destaque da Semana</Text>
      <View style={styles.buttonContainer}>
        <Button label="Assistir Agora" style={styles.playButton} />
        <Button label="Mais Informações" style={styles.infoButton} />
      </View>
    </View>
  </View>
);

interface CategorySectionProps {
  title: string;
  images: any[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, images }) => (
  <View style={styles.categoryContainer}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      horizontal
      data={images}
      renderItem={({ item }) => <Image source={item} style={styles.image} />}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

interface ButtonProps {
  label: string;
  style: object;
}

const Button: React.FC<ButtonProps> = ({ label, style }) => (
  <TouchableOpacity style={style}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  featuredContainer: { position: "relative", marginBottom: 20 },
  featuredImage: { width: "100%", height: 250 },
  overlay: { position: "absolute", bottom: 20, left: 20 },
  featuredTitle: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  buttonContainer: { flexDirection: "row", marginTop: 10 },
  playButton: {
    backgroundColor: "#E50914",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  infoButton: { backgroundColor: "#333", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold" },
  categoryContainer: { marginVertical: 10 },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  image: { width: 120, height: 180, marginHorizontal: 5, borderRadius: 5 },
});

export default Home;
