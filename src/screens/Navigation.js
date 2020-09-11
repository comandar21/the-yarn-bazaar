import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

import {Header, Container, Left, Right, Body, Title, Button} from 'native-base';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// import {
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import Home from './Home';
import Notification from './Notification';
import QDTabs from './Quotes&Disapatches/QDTabs';
// import PostYarnRequirements from './PostYarnRequirements';
import AllTab from './PostyarnRequirment/AllTab';

// import Giftedchat from './src/screens/Giftedchat';
const MainNavigator = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const tabsScreens = () => {
  return (
    <Container>
      {/* <Header style={style.header}>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" style={style.title} />
          </Button>
        </Left>
        <Body>
          <Title style={style.title}>The Yarn Bazaar</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="person" style={style.title}></Icon>
          </Button>
        </Right>
      </Header> */}
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="orange"
        barStyle={{backgroundColor: 'white'}}>
        <Tab.Screen
          name="Feed"
          component={Home}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({color}) => (
              <Icon name="search" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={AllTab}
          options={{
            tabBarLabel: 'Post Yarn Requirements',
            tabBarIcon: ({color}) => (
              <Icon name="bell" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={QDTabs}
          options={{
            tabBarLabel: 'Qoutes & Dispatches',
            tabBarIcon: ({color}) => (
              <Icon name="check-square" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </Container>
  );
};

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={tabsScreens} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
};

const style = StyleSheet.create({
  header: {
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
  },
});

export default App;
