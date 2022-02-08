import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/containers/Home/Home";
//import LogoTitle from './src/components/LogoTitle/LogoTitle';
//import { FontAwesome } from "@expo/vector-icons";

import Menu from "./src/containers/Menu/Menu";
import ProductList from "./src/containers/Products/ProductList";
import { CategoryProvider } from "./src/contexts/CategoryProvider";
import { ProductsProvider } from "./src/contexts/ProductsProvider";
import ProductDetails from "./src/containers/Products/ProductDetails";
import Cart from "./src/containers/Cart/Cart";

//const { categories } = useContext(CategoryContext);

/**options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#fff"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerRight: () => (
              <FontAwesome name="bars" size={32} color="#333" onPress={() => navigation.navigate("Categories")}/>
            )
           }} */

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <CategoryProvider>
      <ProductsProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen
              name="ProductList"
              component={ProductList}
              options={({ route }) => ({ title: route.params.catName })}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={({ route }) => ({ title: route.params.prdName, prdId: route.params.prdId })}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProductsProvider>
    </CategoryProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
