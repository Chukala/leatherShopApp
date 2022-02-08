import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const EmptyCart = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.emptyCartContainer}>
      <View style={styles.cartInsideContainer}>
        <FontAwesome name="shopping-cart" size={20} color="#696763" />
        <Text style={styles.emptyText}>Your cart is currently empty.</Text>
      </View>
      <View style={styles.emptyBtnContainer}><Button title="Return to menu" color="#fe980f" onPress={()=> navigation.navigate('Menu')} /></View>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
    emptyCartContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    emptyCartTitleContainer: {
        paddingVertical: 5,
    },
    cartTitleText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    cartInsideContainer: {
        borderColor: '#fe980f',
        borderTopWidth: 5,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f1f1f1',
    },
    emptyText: {
        fontSize: 20,
        padding: 10,
    },
    emptyBtnContainer: {
        marginTop: 30,
    }
});
