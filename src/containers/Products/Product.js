import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductsProvider from "../../contexts/ProductsProvider";

const Product = ({ product }) => {
  const { prdId, prdName, prdImg, prdPrice } = product;

  const navigation = useNavigation();

  const { handleDetails, addToCart, cart } = useContext(ProductsProvider);
 
  return (
    <TouchableHighlight
      onPress={() => {
        handleDetails(prdId);
        navigation.navigate("ProductDetails", { prdName: prdName, prdId: prdId });
      }}
      style={styles.prdTouchable}
    >
      <View style={styles.prd}>
        <View style={styles.prdImageContainer}>
          <Image source={prdImg} style={styles.prdImage} />
        </View>
        <View style={styles.prdTextContainer}>
          <View style={styles.prdName}>
            <Text style={styles.prdNameText}>{prdName}</Text>
          </View>
          <View style={styles.prdPrice}>
            <Text style={styles.priceText}>{prdPrice} Sek</Text>
          </View>
        </View>
        <View style={styles.prdAddToCartBtn}>
          <Button title="Add To Cart" color="#fe980f" 
            onPress={() => {
            addToCart(prdId);
            navigation.navigate("Cart");
      }}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Product;

const styles = StyleSheet.create({
  prdTouchable: {
    width: "44%"
  },
  prd: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    zIndex: 10,
    borderColor: "#f0f0f0",
    borderWidth: 1,
    margin: 10
  },
  prdAddToCartBtn: {
    width: "100%"
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    paddingVertical: 10
  },
  prdNameText: {
    textTransform: "capitalize"
  },
  prdImageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  prdImage: {
    width: 100,
    height: 100
  },
  prdTextContainer: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 10
  }
});
