import React from "react";
import { Image, StyleSheet } from "react-native";
//import logo from "../../images/logo/logo.png";

const LogoTitle = () => {
  return <Image source={require('../../images/logo/logo.png')} style={styles.image} />;
};

export default LogoTitle;

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 40
  }
});
