import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import image from "../../images/logo/hero.png";

const HeroImg = () => {
  return (
    <View style={styles.heroContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}/>      
    </View>
  );
};

export default HeroImg;

const styles = StyleSheet.create({
  heroContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  image: {
    width: 250,
    height: 170,
    justifyContent: "center",
  },
  
});
