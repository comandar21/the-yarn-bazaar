import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import {StyleSheet} from 'react-native';

import Splashscreen from './src/screens/Splashscreen';
import Login from './src/screens/Login';
import QDTabs from './src/screens/Quotes&Disapatches/QDTabs';
import PostYarnRequirement from './src/screens/PostyarnRequirment/PostYarnRequirement';
import Explore from './src/screens/Explore';
import Notification from './src/screens/Notification';

// import Giftedchat from './src/screens/Giftedchat';
const MainNavigator = createStackNavigator();
const bottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const HomeTabs = () => {
    return (
      <bottomTab.Navigator
        initialRouteName="Explore"
        tabBarOptions={{
          activeTintColor: 'orange',
        }}
        barStyle={{backgroundColor: 'white'}}>
        <bottomTab.Screen
          name="explore"
          component={Explore}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({color}) => (
              <Icon name="search" color={color} size={25} />
            ),
          }}
        />
        <bottomTab.Screen
          name="Notifications"
          component={PostYarnRequirement}
          options={{
            tabBarLabel: 'Post Yarn Requirements',
            tabBarIcon: ({color}) => (
              <Icon name="bell" color={color} size={25} />
            ),
          }}
        />
        <bottomTab.Screen
          name="Profile"
          component={QDTabs}
          options={{
            tabBarLabel: 'Qoutes & Dispatches',
            tabBarIcon: ({color}) => (
              <Icon name="check-square" color={color} size={25} />
            ),
          }}
        />
      </bottomTab.Navigator>
    );
  };

  const DrawerNavigaton = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Home" component={HomeTabs} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainNavigator.Screen name="Splashscreen" component={Splashscreen} />
        <MainNavigator.Screen name="Home" component={DrawerNavigaton} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;

const style = StyleSheet.create({
  header: {
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
  },
});
