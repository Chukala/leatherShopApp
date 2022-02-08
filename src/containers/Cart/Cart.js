import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView } from "react-native";
import EmptyCart from "./EmptyCart";
import ProductsProvider from "../../contexts/ProductsProvider";
import CartItem from "./CartItem";
import CartPriceSummary from "./CartPriceSummary";

const Cart = () => {
  const { cartSubTotal, cartTax, cartTotal, cart } = useContext(ProductsProvider);

  //const { prdCategorie, prdName, prdId, prdPrice, prdImg, prdInfo, prdCount } = details;
  //const { prdCategorie, prdName, prdId, prdPrice, prdImg, prdInfo, prdCount } = cart;

  return (
    <ScrollView style={styles.cartContainer}>
      {cart.length > 0 ? (
        <View style={styles.cartItemsContainer}>
          <View style={styles.cartTitle}>
            <Text style={styles.cartTitleText}>You have {cart.length} products in your Cart</Text>
          </View>

          {cart.map((item, i) => {
            return <CartItem cartItem={item} key={i} />;
          })}

          <View style={styles.priceSummaryContainer}>
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

          <View style={styles.proceedToCheckout}>
            <Button title="Proceed to Checkout" color="#fe980f" />
          </View>
        </View>
      ) : (
        <EmptyCart />
      )}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  cartItemsContainer: {
    alignItems: "center",
    justifyContent: "center"
  },

  cartTitle: {
    padding: 20
  },
  cartTitleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  cartImgContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  cartTextContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10
  },
  prdAttribute: {
    paddingBottom: 10
  },
  prdAttributeText: {
    textTransform: "capitalize"
  },
  incDecBtnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  incBtn: {
    paddingRight: 10
  },
  decBtn: {
    padding: 10
  },
  qty: {
    padding: 5
  },
  qtyText: {
    fontSize: 20
  },
  trashBtn: {
    paddingVertical: 10
  },
  clearCart: {
    paddingBottom: 10
  },
  priceSummaryContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    paddingLeft: 150,
    marginVertical: 10
  },
  priceSummary: {
    paddingBottom: 5
  },
  priceSummaryText: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 20
  },
  proceedToCheckout: {
    marginVertical: 10
  }
});
