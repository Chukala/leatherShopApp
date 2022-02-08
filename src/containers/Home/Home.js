import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HeroImg from "../../components/Hero/HeroImg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PopularProductsList from "../../components/PopularProducts/PopularProductsList";

const Home = () => {
  return (
    <ScrollView>
      <Header />
      <View style={styles.homeContainer}>
        <HeroImg />
        <PopularProductsList />
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});
