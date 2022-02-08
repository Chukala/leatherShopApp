import React,{ useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SubCategoryList from "./SubCategoryList";
import { CategoryProvider } from "../../contexts/CategoryProvider";

const CategoryList = (props) => {
    const [displaySubCategory, setDisplaySubCategory] = useState(false);
    /** destructuring */
    const { parentCategoryName, categories } = props.catData;
    
    
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.catListContainer} onPress={() => setDisplaySubCategory(!displaySubCategory)}>
        <View style={styles.catTitleContainer}>
          <Text style={styles.catTitle}>{ parentCategoryName }</Text>
        </View>
        <View style={styles.catDropdown} >
          { displaySubCategory ? <FontAwesome name="chevron-up" size={20} color="#333" /> : <FontAwesome name="chevron-down" size={20} color="#333" />}
        </View>
      </TouchableOpacity>
      { displaySubCategory && (
          <View style={{display: displaySubCategory  ? 'flex' : 'none', width: '100%'}}>{categories.map( (item, i) => <SubCategoryList subCategories={item} key={i} /> ) }</View>
        )}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: 'relative',  
  },
  catListContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20, 
  },
  catTitleContainer: {
      
  },

  subCategories: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20
  },
  catTitle: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
