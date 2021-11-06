import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Guide = (props) => {
    
    const data = props.route.params.data;

    return (
        <SafeAreaView>
            <Text>Guide</Text>
        </SafeAreaView>
    )
}

export default Guide
