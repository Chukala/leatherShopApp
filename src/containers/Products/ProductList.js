import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
//import { useState } from "react/cjs/react.development";
import HeaderBottom from "../../components/Header/HeaderBottom";
import ProductsProvider  from "../../contexts/ProductsProvider";
import Product from "../Products/Product";

const ProductList = () => {
  const { products, count } = useContext(ProductsProvider);
   
  return ( 
    <ScrollView style={styles.prdContainer}>
      <HeaderBottom />
      { products ?
      <View style={styles.productListContainer}>
        <View style={styles.popularFilterContainer}>
          <View style={styles.popularFilterTitle}>
            <Text>Filter</Text>
          </View>
          <View style={styles.popularFilters}>
            <Button title="Brand" color="#fe980f" />
            <Button title="Price" color="#fe980f" />
            <Button title="Color" color="#fe980f" />
            <Button title="All Filter" color="#fe980f" />
          </View>
        </View>
        <View style={styles.totalDisplayedPrds}>
          <Text>{count} Products</Text>
        </View>
        <View style={styles.prdList}>
        { 
          products.map((prd) => {
             return( <Product product={prd} key={prd.prdId} />);
           })
         }
          
        </View>
      </View>:''}
    </ScrollView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  prdContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  productListContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10
  },
  popularFilterContainer: {
    padding: 10
  },
  popularFilterTitle: {
    paddingVertical: 10
  },
  popularFilters: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10
  },
  totalDisplayedPrds: {
    padding: 5,
    marginTop: 10
  },
  prdList: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "space-around",
    alignContent: "center",
    marginTop: 10
  },

});
