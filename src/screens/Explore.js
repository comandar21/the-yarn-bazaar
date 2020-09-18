import React, {Component, useState, useRef, useEffect} from 'react';
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
import Autocomplete from 'react-native-autocomplete-input';
import ExploreCard from '../components/ExploreCard';

const Explore = ({navigation}) => {
  // const pressHandler = () => {
  //   navigation.navigate('Splashscreen');
  // };

  const [display, setDisplay] = useState(false);
  // const [options, setOptions] = useState([]);
  // const [search, setSearch] = useState('');
  // const wrapperRef = useRef(null);

  const data = [
    {name: 'cotton'},
    {name: 'Texurise'},
    {name: 'PSF'},
    {name: '60Cotton'},
    {name: 'texurise'},
  ];

  // useEffect(() => {
  //   window.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     window.removeEventListener('mousedown', handleClickOutside);
  //   };
  // });

  // const handleClickOutside = (event) => {
  //   const {current: wrap} = wrapperRef;
  //   if (wrap && !wrap.contains(event.target)) {
  //     setDisplay(false);
  //   }
  // };

  // setOptions(data);

  return (
    <View style={style.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          alignItems: 'center',
          height: 60,
        }}>
        <View style={{flex: 8, margin: 5, borderRadius: 50}}>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              backgroundColor: '#d3d3d3',
              flexDirection: 'row',
              height: 40,
            }}
            onPress={() => {
              setDisplay(!display);
            }}>
            <FeatherIcon name="search" size={25} style={{margin: 5}} />
            <TextInput placeholder="Search" />
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <FontAwesomeIcon name="heart" size={25} />
        </View>
      </View>
      {display && (
        <View style={{height: 200, width: null, backgroundColor: 'white'}}>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
        </View>
      )}
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
