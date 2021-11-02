import React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Characters List
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111111'
    },
    headerText: {
        fontSize: 28,
        alignSelf: 'center',
        fontFamily: "ZenKurenaido",
        color: 'white',
        marginVertical: 12
    },
});

export default Header
