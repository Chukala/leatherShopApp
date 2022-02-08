import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';



const SubCategoryList = ({ subCategories }) => {
  const { categoryName } = subCategories;
  //const {categoyName } = props.subCategories;
  const navigation = useNavigation();
  return (
    <View style={styles.subCatListContainer}>
      <TouchableOpacity style={styles.catTitleContainer} onPress={() => navigation.navigate("ProductList", {catName: categoryName })} >
        <Text style={styles.catTitle}>{ categoryName }</Text>
      </TouchableOpacity> 
    </View>
  );
};

export default SubCategoryList;

const styles = StyleSheet.create({
  subCatListContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20,
  },
  catTitleContainer: {
      
  },

  catTitle: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
