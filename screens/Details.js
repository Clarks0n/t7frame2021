import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Frame from '../components/FrameScreen/Frame';
import Throw from '../components/FrameScreen/Throw';
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
            <Tab.Screen name="Frame Data" component={Frame} initialParams={{ data: dataFrame[0] }} />
            {typeof dataFrame[1] !== 'undefined' && dataFrame[1].typeId === 'throws' ? 
                <Tab.Screen name="Throw Data" component={Throw} initialParams={{ data: dataFrame[1] }} />
            : null }
            <Tab.Screen name="Guide" component={Guide} initialParams={{ data: dataMeta }} />
        </Tab.Navigator>
    )
};

export default Details


