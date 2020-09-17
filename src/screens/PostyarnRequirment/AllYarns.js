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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {color} from 'react-native-reanimated';
import PostYarnCard from '../../components/PostYarnCard';

const AllYarns = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Splashscreen');
  };

  return (
    <View style={style.container}>
      <View>
        <TouchableOpacity
          style={{
            margin: 10,
            width: null,
            height: 40,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'row'}}>
            <FeatherIcon
              name="sliders"
              size={16}
              style={{marginRight: 5, color: 'grey'}}
            />
            <Text style={style.cardtext}>Sort/Filter</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Content style={{margin: 5}}>
        <PostYarnCard />
        <PostYarnCard />
        <PostYarnCard />
      </Content>
    </View>
  );
};

export default AllYarns;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4FA',
  },

  button: {
    marginTop: 5,
    borderRadius: 5,
    marginLeft: 5,
    backgroundColor: 'white',
    height: 30,
    width: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainbutton: {
    marginTop: 5,
    borderRadius: 5,
    marginLeft: 5,
    backgroundColor: 'orange',
  },

  text: {
    color: 'black',
    fontSize: 8,
  },

  cardtext: {
    color: 'grey',
    fontSize: 16,
  },
});
