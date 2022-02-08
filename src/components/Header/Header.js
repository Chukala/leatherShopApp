import React from "react";
import { View, StyleSheet } from "react-native";

import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  
  return (
    <View style={styles.headerContainer}>
      <HeaderTop />
      <HeaderBottom />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 5,
    zIndex: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
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
    borderColor: "orange",
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
    backgroundColor: "transparent",
    
  },
  logIn: {
    padding: 10
  },
  cart: {
    padding: 10
  }
});
