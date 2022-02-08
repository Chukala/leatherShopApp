import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Badge from "../Badge/Badge";

const HeaderBottom = () => {
  return (
    <View style={styles.headerBottomContainer}>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Search product" autoFocus={false} />
        <FontAwesome style={styles.searchIcon} name="search" size={20} color="#696763" />
      </View>
      <View style={styles.logIn}>
        <FontAwesome style={styles.userIcon} name="user" size={20} color="#696763" />
      </View>
      <View style={styles.cart}>
        <FontAwesome style={styles.shoppingBagIcon} name="shopping-cart" size={20} color="#696763" />
        <Badge />
      </View>
    </View>
  );
};

export default HeaderBottom;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 5,
    zIndex: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: "#fff"
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
  },
  headerBottomContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  search: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fe980f",
    borderLeftWidth: 5,
    borderRadius: 5,
    backgroundColor: "#f1f1f1",
    marginRight: 20
  },
  searchIcon: {
    padding: 10
  },
  input: {
    flex: 1,
    padding: 10,
    color: "#ccc",
    backgroundColor: "transparent"
  },
  logIn: {
    padding: 10
  },
  cart: {
    padding: 10
  },
  shoppingBagIcon: {
    position: "relative"
  }
});
