import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
const Footer = () => {
    return(
        <View style={styles.footerContainer}>
            <View style={styles.footerColumn_1}>
                <Text style={styles.footerText}>Follow us</Text> 
                <View style={styles.socialMedia}>
                  <View style={styles.icons}><FontAwesome name='instagram' color='#fff' size={20} /></View>
                  <View style={styles.icons}><FontAwesome name='facebook' color='#fff' size={20} /></View>
                  <View style={styles.icons}><FontAwesome name='youtube' color='#fff' size={20} /></View>
                  <View style={styles.icons}><FontAwesome name='twitter' color='#fff' size={20} /></View>
                </View>  
            </View>
            <View style={styles.footerColumn_2}>
                <Text style={styles.footerText}>Payments</Text>
                <View style={styles.payments}>
                  <View style={styles.paymentsImg}><Image style={styles.image} source={require('../../images/logo/swish.png')}/></View>
                  <View style={styles.paymentsImg}><Image style={styles.image} source={require('../../images/logo/visa.png')}/></View>
                  <View style={styles.paymentsImg}><Image style={styles.image} source={require('../../images/logo/masterCard.png')}/></View>
                </View>  
             </View>  
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        ...Platform.select({
            ios: {
                backgroundColor: "#f1f1f1",
                padding: 20,
            },
            android: {
                backgroundColor: '#333',
                padding: 20,
            },
            default: {
                backgroundColor: "green",
                padding: 20,
            }
        })
    },
    footerColumn_1: {
        width: '100%',
    },
    socialMedia: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 15,
    },
    icons: {
        padding: 10
    },
    footerColumn_2: {
        width: '100%',
    },
    payments: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    paymentsImg: {
        padding: 15
    },
    image: {
        width: 56,
        height: 40,
    },
    footerText: {
        fontWeight: 'bold',
        color: '#fff',
    }
});