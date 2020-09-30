import React, {Component} from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  Left,
  Right,
  Button,
  Body,
  Title,
  Item,
} from 'native-base';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {color} from 'react-native-reanimated';

import MyOrders from './MyOrders/MyOrders';
import MyDispatches from './MyDispatches/MyDispatches';
import MyQuotes from './MyQuotes/MyQuotes';

const QDTabs = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Splashscreen');
  };

  return (
    <Container style={style.container}>
      <Tabs
        tabBarActiveTextColor="black"
        tabBarInactiveTextColor="grey"
        locked
        tabBarUnderlineStyle={{backgroundColor: '#F99F23'}}>
        <Tab
          heading="My Quotes"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <MyQuotes navigation={navigation} />
        </Tab>
        <Tab
          heading="My Orders"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <MyOrders navigation={navigation} />
        </Tab>
        <Tab
          heading="My Dispatches"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <MyDispatches navigation={navigation} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default QDTabs;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4FA',
  },
  tab: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
});