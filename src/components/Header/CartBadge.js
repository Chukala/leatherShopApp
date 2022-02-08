import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartBadge = () => {
    return(
        <View style={styles.badgeContainer}>
            <Text style={styles.badgeContent}>0</Text>
        </View>
    );
}

export default CartBadge;

const styles = StyleSheet.create({
    badgeContainer: {
       width: 25,
       height: 25,
       borderRadius: 25,
       backgroundColor: '#fe980f',
       position: 'absolute',
       alignItems: 'center',
       justifyContent: 'center',
       top: -10,
       right: -10,
    },
    badgeContent: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12
    }
});