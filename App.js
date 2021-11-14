import React , {useEffect} from 'react';
import { StatusBar, useColorScheme, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RNBootSplash from "react-native-bootsplash";

import Home from './screens/Home';
import Details from './screens/Details';
import BackExit from './hooks/BackExit';

const Stack = createNativeStackNavigator();

const App = () => {
  /*
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  */

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      BackExit
    );

    return () => backHandler.remove();
  },[]);
  
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
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer >
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
