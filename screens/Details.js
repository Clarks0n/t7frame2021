import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Frame from '../components/FrameScreen/Frame';
import Guide from '../components/FrameScreen/Guide';

const Tab = createMaterialTopTabNavigator();

const Details = ({route}) => {

    const dataFrame = route.params.item.dataFrame;
    const dataMeta = route.params.item.dataMeta;

    const screenOptions = {
        tabBarLabelStyle: { 
            fontSize: 16,
            color : '#fff',
            fontFamily: 'ZenKurenaido'
        },
        tabBarStyle: { 
            backgroundColor: '#607d8a' 
        },
        tabBarIndicatorStyle: {
            backgroundColor: '#ffff33'
        }
    };

    return (
        <Tab.Navigator screenOptions={screenOptions }>
            <Tab.Screen name="Frame Data" component={Frame} initialParams={{ data: dataFrame  }} />
            <Tab.Screen name="Guide" component={Guide} initialParams={{ data: dataMeta }} />
        </Tab.Navigator>
    )
};

export default Details


