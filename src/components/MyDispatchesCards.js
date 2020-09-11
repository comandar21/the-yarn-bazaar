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
  CardItem,
  Thumbnail,
} from 'native-base';
import {StyleSheet, TouchableOpacity, Image, StatusBar} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {color} from 'react-native-reanimated';

const MyOrdersCard = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Splashscreen');
  };

  return (
    <Card>
      <View>
        <Text style={{color: 'orange', margin: 5}}>Planned</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, margin: 5}}>
          <Card style={{borderRadius: 5}}>
            <TouchableOpacity>
              <Image
                source={require('../screens/media/sin_tex.jpg')}
                style={{
                  height: 70,
                  width: null,
                  flex: 1,
                }}></Image>
            </TouchableOpacity>
          </Card>
        </View>
        <View style={{flex: 3, margin: 5}}>
          <Text style={{marginTop: 5}}>SINTEX MILLS</Text>
          <Text style={{color: 'orange'}}>61sCotton,Combed</Text>
        </View>
      </View>
      <View>
        <Text>Quantity - 9 Tons</Text>
      </View>
      <View></View>
      <View style={{margin: 5}}>
        <Text style={style.cardtext}>
          Estimated Date of Receving : 31/08/20
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
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
            <Text style={{color: 'white'}}>Messages</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              margin: 10,
              width: null,
              height: 40,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'orange',
              borderWidth: 1,
            }}>
            <Text style={{color: 'orange'}}>More Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

export default MyOrdersCard;

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
