import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ProductsProvider from "../../contexts/ProductsProvider";

const CartItem = ({ cartItem }) => {
  const { prdId, prdName, prdImg, prdPrice, prdCategorie, prdCount, prdInfo, prdTotal } = cartItem;

  const { increment, decrement, removeItem, clearCart } = useContext(ProductsProvider);

  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.cartImgContainer}>
        <Image source={prdImg} />
      </View>
      <View style={styles.cartTextContainer}>
        <View style={styles.prdAttribute}>
          <Text style={styles.prdAttributeText}>Name: {prdName}</Text>
        </View>
        <View style={styles.prdAttribute}>
          <Text style={styles.prdAttributeText}>Price: {prdPrice} Sek</Text>
        </View>
        <View style={styles.prdAttribute}>
          <Text style={styles.prdAttributeText}>Category: {prdCategorie}</Text>
        </View>
        <View style={styles.prdAttribute}>
          <Text style={styles.prdAttributeText} numberOfLines={3}>
            Info: {prdInfo}
          </Text>
        </View>
        <View style={styles.incDecBtnContainer}>
          <View style={styles.decBtn}>
            <Button title="-" color="#fe980f" onPress={() => decrement(prdId)} />
          </View>

          <View style={styles.qty}>
            <Text style={styles.qtyText}>{prdCount}</Text>
          </View>
          <View style={styles.incBtn}>
            <Button title="+" color="#fe980f" onPress={() => increment(prdId)} />
          </View>
        </View>
        <View style={styles.trashBtn}>
          <FontAwesome style={styles.trash} name="trash" size={20} color="#fe980f" onPress={() => removeItem(prdId)} />
        </View>
        <View style={styles.prdAttribute}>
          <Text style={styles.prdAttribute}>ItemTotal:{prdTotal}</Text>
        </View>
        <View style={styles.clearCart}>
          <Button title="Clear Cart" color="#fe980f" onPress={() => clearCart()} />
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItemContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: "#f1f1f1",
    paddingHorizontal: 50,
    zIndex: 10,
    margin: 10
  },
  cartTitle: {
    padding: 20
  },
  cartTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase"
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
    padding: 10
  },
  decBtn: {
    paddingRight: 10
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
  
  proceedToCheckout: {
    marginVertical: 10
  }
});
