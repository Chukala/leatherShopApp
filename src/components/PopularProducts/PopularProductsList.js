import React, { useContext } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import ProductsProvider from "../../contexts/ProductsProvider";
import PopularProduct from "./PopularProduct";

const PopularProductsList = () => {
  const { filteredProducts } = useContext(ProductsProvider);

  return (
    <ScrollView style={styles.prdContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Popular Products </Text>
      </View>
      {filteredProducts ? (
        <View style={styles.productListContainer}>
          <View style={styles.prdList}>
            {filteredProducts.map((prd) => {
              return <PopularProduct popularProduct={prd} key={prd.prdId} />;
            })}
          </View>
          {/*<FlatList 
            data={filteredProducts}
            renderItem={(item) => <PopularProduct popularProduct={item} />}
            keyExtractor={item => item.prdId}
          />*/}
        </View>
      ) : (
        " "
      )}
    </ScrollView>
  );
};

export default PopularProductsList;

const styles = StyleSheet.create({
  prdContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff"
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5
  },
  productListContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10
  },
  prdList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    marginTop: 10
  }
});
