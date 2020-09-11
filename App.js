import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Splashscreen from './src/screens/Splashscreen';
import Login from './src/screens/Login';
import Navigation from './src/screens/Navigation';

// import Giftedchat from './src/screens/Giftedchat';
const MainNavigator = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainNavigator.Screen name="Splashscreen" component={Splashscreen} />
        <MainNavigator.Screen name="Login" component={Login} />
        <MainNavigator.Screen name="Home" component={Navigation} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
