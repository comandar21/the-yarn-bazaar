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
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {color} from 'react-native-reanimated';

const PostYarnCard = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Splashscreen');
  };

  return (
    <Card>
      <View>
        <Text style={{color: 'orange', margin: 5}}>TOP SELLING</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, margin: 5}}>
          <Card style={{borderRadius: 5}}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#2B3856',
                  height: 70,
                  width: null,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                }}>
                <Text style={{color: 'white'}}>60s</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>Cotton</Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>
        <View style={{flex: 3, margin: 5}}>
          <Text>Weaving Combined Ring</Text>
          <Text>Frame</Text>
          <Text style={{color: 'orange', margin: 5}}>130-150</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text
          style={{
            backgroundColor: '#FFE5B4',
            width: null,
            height: 25,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFAF0A',
          }}>
          5+ Sree Lalita Paremeshwari
        </Text>
        <Text
          style={{
            backgroundColor: '#D3D3D3',
            width: null,
            height: 25,
            borderRadius: 5,
            marginLeft: 5,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'blue',
          }}>
          SMC Yarn
        </Text>
        <Text
          style={{
            backgroundColor: '#FFE5B4',
            width: 30,
            height: 25,
            marginLeft: 5,
            textAlign: 'center',
            color: 'orange',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          +4
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#FFE5B4',
          width: null,
          height: 25,
        }}>
        <Text style={{color: 'black', margin: 4}}>
          5+ People just bought this yarn recently
        </Text>
      </View>
    </Card>
  );
};

export default PostYarnCard;

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
    fontSize: 4,
  },

  cardtext: {
    color: 'black',
    fontSize: 5,
  },
  rowbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
