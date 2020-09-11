import React, {Component} from 'react';
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
} from 'native-base';

import {
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import AllYarns from './AllYarns';
import Cotton from './Cotton';
import Texturize from './Texturize';
import PFS from './PFS';
import Tab5 from './Tab5';
import Search from './SearchBar/Search';

const AllTab = () => {
  return (
    <Container style={style.container}>
      <Header style={style.header}>
        <Left>
          <Button transparent>
            <FeatherIcon name="menu" style={style.title} size={25} />
          </Button>
        </Left>
        <Body>
          <Title style={style.title}>The Yarn Bazaar</Title>
        </Body>

        <Right>
          <Button transparent>
            <FontAwesomeIcon name="bell" style={style.title} size={25} />
          </Button>
        </Right>
      </Header>

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
        tabBarActiveTextColor="orange"
        tabBarInactiveTextColor="#666362"
        renderTabBar={() => <ScrollableTab />}>
        <Tab
          heading="All Yarns"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <AllYarns />
        </Tab>
        <Tab
          heading="Cotton"
          tabStyle={{backgroundColor: 'orange'}}
          activeTabStyle={{backgroundColor: 'orange'}}>
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

export default AllTab;

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
});
