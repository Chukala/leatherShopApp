import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductsProvider from "../../contexts/ProductsProvider";

const ProductDetails = () => {
  const { details, addToCart } = useContext(ProductsProvider);

  const { prdCategorie, prdName, prdPrice, prdImg, prdInfo, prdId } = details;

  const navigation = useNavigation();

  return (
    <View style={styles.productDetailsContainer}>
      <View style={styles.detailTitle}>
        <Text style={styles.detailTitleText}>Product Details</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailImgContainer}>
          <Image source={prdImg} />
        </View>
        <View style={styles.prdDetailsTextContainer}>
          <View style={styles.prdName}>
            <Text style={styles.prdNameText}>{prdName}</Text>
          </View>
          <View style={styles.prdPrice}>
            <Text style={styles.prdPriceText}>{prdPrice} Sek</Text>
          </View>
          <View style={styles.prdName}>
            <Text style={styles.prdNameText}>{prdCategorie}</Text>
          </View>
          <View style={styles.prdName}>
            <Text style={styles.prdInfoText}>{prdInfo}</Text>
          </View>
          <View style={styles.prdAddToCartBtn}>
            <Button
              title="Add To Cart"
              color="#fe980f"
              onPress={() => {
                addToCart(prdId), navigation.navigate("Cart");
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  productDetailsContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  detailTitle: {
    padding: 20
  },
  detailTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  detailImgContainer: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center"
  },
  detailText: {
    width: "60%",
    padding: 12
  },
  detailBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10
  },
  prdDetailsTextContainer: {
    width: "60%",
    padding: 10,
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  prdName: {
    marginVertical: 20
  },
  prdNameText: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize"
  },
  prdPrice: {
    paddingVertical: 10
  },
  prdPriceText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#fe980f"
  },
  prdInfoText: {
    fontSize: 18
  }
});
