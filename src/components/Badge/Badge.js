import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import ProductsProvider from "../../contexts/ProductsProvider";

const Badge = () => {
  const { cart } = useContext(ProductsProvider);
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.badgeContainer} onPress={() => navigation.navigate('Cart')}>
      <Text style={styles.badgeContent}>{cart.length}</Text>
    </TouchableOpacity>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badgeContainer: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: "#fe980f",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: -10,
    right: -10
  },
  badgeContent: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12
  }
});
