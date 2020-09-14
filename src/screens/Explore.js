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
  Title,
  Button,
  Text,
  View,
  Icon,
  Card,
} from 'native-base';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {color} from 'react-native-reanimated';

import ExploreCard from '../components/ExploreCard';

const Explore = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Splashscreen');
  };

  return (
    <View style={style.container}>
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
      <View>
        <View style={{margin: 10}}>
          <Text>Recents</Text>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
          </ScrollView>
        </View>
      </View>
      <View>
        <View style={{margin: 10}}>
          <Text>Explore</Text>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Explore;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4FA',
  },

  header: {
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
  },
});
