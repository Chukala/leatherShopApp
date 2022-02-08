import React, { useContext } from "react";
import { View, Image, Text, StyleSheet, TouchableHighlight, Button } from "react-native";
import ProductsProvider from "../../contexts/ProductsProvider";
import { useNavigation } from "@react-navigation/native";

const PopularProduct = ({ popularProduct }) => {
  const { prdId, prdName, prdImg, prdPrice } = popularProduct;
  const navigation = useNavigation();
  const { handleDetails, addToCart, cart } = useContext(ProductsProvider);

  return (
    
      <View style={styles.popularProducts}>
        {/**Replaced by Flatlist */}
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
              <Button
                title="Add To Cart"
                color="#fe980f"
                onPress={() => {
                  addToCart(prdId);
                  navigation.navigate("Cart");
                }}
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    
  );
};

export default PopularProduct;

const styles = StyleSheet.create({
  
  popularProducts: {
    width: '44%',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: 20,
  },
  prdTouchable: {
    width: "100%"
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
