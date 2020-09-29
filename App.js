import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import {StyleSheet, TouchableOpacity, Modal} from 'react-native';
import Splashscreen from './src/screens/Splashscreen';
import HeaderComponent from './src/components/HeaderComponent';
import QuotesDispatches from './src/screens/Quotes&Dispatches';
import PostYarnRequirement from './src/screens/PostYarnRequirement';
import Explore from './src/screens/Explore';
import AboutUs from './src/screens/AboutUs';
import DispatchInformation from './src/screens/DispatchInformation';
import {Container, View} from 'native-base';
import PlanDispatch from './src/screens/Quotes&Disapatches/PlanDispatch';
import MyDispatches from './src/screens/Quotes&Disapatches/MyDispatches';
import MyOrders from './src/screens/Quotes&Disapatches/MyOrders';
import MyQuotes from './src/screens/Quotes&Disapatches/MyQuotes';
import About from './src/screens/DispatchInformation/About';
import Document from './src/screens/DispatchInformation/Document';
import Payment from './src/screens/DispatchInformation/Payment';

// import Giftedchat from './src/screens/Giftedchat';
const MainNavigator = createStackNavigator();
const bottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const QDStackNavigator = createStackNavigator();

function QuotesDispatchesTab() {
  return (
    <QDStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <QDStackNavigator.Screen
        name="QuotesDispatches"
        component={QuotesDispatches}
      />
      <QDStackNavigator.Screen name="MyDispatches" component={MyDispatches} />
      <QDStackNavigator.Screen name="MyOrders" component={MyOrders} />
      <QDStackNavigator.Screen name="MyQuotes" component={MyQuotes} />
      <QDStackNavigator.Screen name="About" component={About} />
      <QDStackNavigator.Screen name="Document" component={Document} />
      <QDStackNavigator.Screen name="Payment" component={Payment} />
      <QDStackNavigator.Screen
        name="DispatchInformation"
        component={DispatchInformation}
      />
    </QDStackNavigator.Navigator>
  );
}

const App = () => {
  const HomeTabs = () => {
    return (
      <Container>
        <HeaderComponent />
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
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0, // space from bottombar
                    height: 65,
                    width: 65,
                    borderRadius: 65,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'orange',
                    borderColor: 'white',
                    borderWidth: 5,
                  }}>
                  <Icon name="file-text" color="white" size={30} />
                </View>
              ),
            }}
          />
          <bottomTab.Screen
            name="Profile"
            component={QuotesDispatchesTab}
            options={{
              tabBarLabel: 'Quotes & Dispatches',
              tabBarIcon: ({color}) => (
                <Icon name="check-square" color={color} size={25} />
              ),
            }}
          />
        </bottomTab.Navigator>
      </Container>
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
        <Drawer.Screen name="AboutUs" component={AboutUs} />
        <Drawer.Screen name="PlanDispatch" component={PlanDispatch} />
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
    alignItems: 'center',
  },
  title: {
    color: 'black',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  signIn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F99F23',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  forgotpassword_view: {
    marginTop: 15,
    alignItems: 'flex-end',
  },
  login_text: {
    fontFamily: 'AvenirLTStd-Roman',
    color: '#F99F23',
  },
  noAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
