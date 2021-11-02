import React from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors, DebugInstructions, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Home from './screens/Home/Home';
import Details from './screens/Details/Details';

const Stack = createNativeStackNavigator();

// const RootScreen = () => {
//   return (
//     <
//   )
// }

const App = () => {
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  
  const isDarkMode = useColorScheme() === 'dark';

  const headerOptions = {
    headerStyle: { backgroundColor: '#111111'},
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 28,
      fontFamily: "ZenKurenaido",
      marginVertical: 12
    },
    headerTitleAlign: 'center'
  }

  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar 
            barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
            // backgroundColor='#fff'
            hidden={false}
          />
          <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={headerOptions}
          >
            <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{title: 'Characters List' }} 
            />
            <Stack.Screen 
              name="Details" 
              component={Details} 
              options={({ route }) => ({ title: route.params.screenTitle })} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
   
  );
};

export default App;
