import React,{ useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProductsProvider from "../../contexts/ProductsProvider";

const CartPriceSummary = () => {
  const { cartSubTotal, cartTax, cartTotal, cart } = useContext(ProductsProvider);

  return (
    <View style={styles.priceSummaryContainer}>
      <Text>{JSON.stringify(cart)}</Text>
      <View style={styles.priceSummary}>
        <Text style={styles.priceSummaryText}>SubTotal: {cartSubTotal} </Text>
      </View>
      <View style={styles.priceSummary}>
        <Text style={styles.priceSummaryText}>Tax: {cartTax} </Text>
      </View>
      <View style={styles.priceSummary}>
        <Text style={styles.priceSummaryText}>Total: {cartTotal} </Text>
      </View>
    </View>
  );
};

export default CartPriceSummary;

const styles = StyleSheet.create({
  priceSummaryContainer: {
    marginVertical: 15
  },
  priceSummary: {
    paddingBottom: 5
  },
  priceSummaryText: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 20
  },
});
