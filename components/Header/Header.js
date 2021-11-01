import React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

const Header = () => {
    return (
        <View>
            <Text style={styles.headerText}>
                Characters List
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    headerText: {
      fontSize: 24,
      fontWeight: '600',
      alignSelf: 'center',
      fontFamily: 'NotoSansJP-Regular'
    },
});

export default Header
