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
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {color} from 'react-native-reanimated';
import MyDispatchesCards from '../../components/MyDispatchesCards';

const MyDispatches = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Splashscreen');
  };

  return (
    <View style={style.container}>
      <View style={(style.rowbutton, {margin: 5})}>
        <ScrollView horizontal={true}>
          <Button style={style.button}>
            <Text style={style.text}>All</Text>
          </Button>
          <Button style={style.button}>
            <Text style={style.text}>Planned</Text>
          </Button>
          <Button style={style.button}>
            <Text style={style.text}>Dispatched</Text>
          </Button>
          <Button style={style.button}>
            <Text style={style.text}>Received</Text>
          </Button>
          <Button style={style.button}>
            <Text style={style.text}>Received</Text>
          </Button>
        </ScrollView>
      </View>
      <Content style={{margin: 10}}>
        <MyDispatchesCards />
        <MyDispatchesCards />
        <MyDispatchesCards />
      </Content>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            margin: 10,
            width: null,
            height: 40,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Planed Dispatch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyDispatches;

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
    color: 'black',
    fontSize: 12,
  },
  rowbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
