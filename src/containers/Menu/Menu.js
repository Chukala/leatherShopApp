import React from 'react';
import { View, StyleSheet } from 'react-native';
import Layout from '../../components/Layout/Layout';
import Categories from '../Categories/Categories';


const Menu = () => {
  return(
      <Layout>
        <View style={styles.menuContainer}>
            <Categories />
        </View>
    </Layout>
  );
}

export default Menu;

const styles = StyleSheet.create({
    menuContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
});