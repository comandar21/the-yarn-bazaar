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

  console.log(navigation);

  return (
    <View style={style.container}>
      <Content style={{margin: 5}}>
        <View>
          <MyDispatchesCards navigation={navigation} />
          <MyDispatchesCards navigation={navigation} />
          <MyDispatchesCards navigation={navigation} />
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#F99F23',
              margin: 5,
              width: null,
              height: 40,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Planed Dispatch</Text>
          </TouchableOpacity>
        </View>
      </Content>
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
    backgroundColor: '#F99F23',
  },

  text: {
    color: 'black',
    fontSize: 8,
    fontFamily: 'AvenirLTStd-Roman',
  },

  cardtext: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'AvenirLTStd-Roman',
  },
  rowbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
