import React, { useContext } from "react";

import { View, Text, StyleSheet } from "react-native";
//import categoriesData from "../../data/categoriesData";
import CategoryList from "./CategoryList";
import CategoryProvider from "../../contexts/CategoryProvider";



const Categories = () => {
  const { catalogs } = useContext(CategoryProvider);

  return (
       <View style={styles.categoriesContainer}>
          { catalogs.map( (item, i) => <CategoryList catData={item} key={i}  /> )}
        </View>
  )};
        
      
  

export default Categories;

const styles = StyleSheet.create({
  categoriesContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
});
