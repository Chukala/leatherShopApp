import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderTop = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerTopContainer}>
      <View style={styles.logo}>
        <Image style={styles.image} source={require("../../images/logo/logo.png")} />
      </View>
      <View style={styles.icons}>
        <FontAwesome name="bars" size={32} color="#fe980f" onPress={() => navigation.navigate("Menu")} />
      </View>
    </View>
  );
};

export default HeaderTop;

const styles = StyleSheet.create({
  headerTopContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
    padding: 10
  },
  logo: {
    padding: 5
  },
  image: {
    width: 90,
    height: 40
  },
  icons: {
    padding: 5
  }
});
