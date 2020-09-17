import React, {useState} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Left,
  Right,
  Body,
  Tab,
  Tabs,
  ScrollableTab,
  Title,
  Button,
  Text,
  View,
  Label,
} from 'native-base';

import {
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Modal,
  TouchableHighlight,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DrawerComponent from '../components/DrawerComponent';

import AllYarns from './PostyarnRequirment/AllYarns';
import Cotton from './PostyarnRequirment/Cotton';
import Texturize from './PostyarnRequirment/Texturize';
import PFS from './PostyarnRequirment/PFS';
import Tab5 from './PostyarnRequirment/Tab5';
import Icon from 'react-native-vector-icons/Feather';

const PostYarnRequirement = ({navigation}) => {
  return (
    <Container style={style.container}>
      <Header
        searchBar
        rounded
        style={{backgroundColor: 'white', flexDirection: 'row'}}>
        <Item
          style={{
            borderRadius: 50,
            backgroundColor: '#d3d3d3',
            flex: 8,
          }}>
          <FeatherIcon name="search" size={25} style={{margin: 5}} />
          <Input placeholder="Search" />
        </Item>
        <Item style={{justifyContent: 'center'}}>
          <FontAwesomeIcon name="heart" size={25} />
        </Item>
      </Header>

      <Tabs
        tabBarUnderlineStyle={{backgroundColor: '#F99F23'}}
        renderTabBar={() => <ScrollableTab />}>
        <Tab
          heading="All Yarns"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <AllYarns />
        </Tab>
        <Tab
          heading="Cotton"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <Cotton />
        </Tab>
        <Tab
          heading="Texturize"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <Texturize />
        </Tab>
        <Tab
          heading="PFS"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <PFS />
        </Tab>
        <Tab
          heading="visolai"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <Tab5 />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default PostYarnRequirement;

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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  signIn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F99F23',
  },

  signUp: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#F99F23',
    borderWidth: 1,
    marginTop: 15,
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
});
