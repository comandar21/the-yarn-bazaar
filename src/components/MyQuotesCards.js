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

import Icon from 'react-native-vector-icons/Feather';

const MyOrdersCard = ({navigation}) => {
  // const pressHandler = () => {
  //   navigation.navigate('Splashscreen');
  // };

  return (
    <Card>
      <View>
        <Text
          style={{
            color: '#F99F23',
            margin: 5,
            fontFamily: 'AvenirLTStd-Roman',
            fontSize: 9,
          }}>
          Active
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 3}}>
          <Card style={{borderRadius: 5, width: 52, height: 66}}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#38454F',
                  height: 50,
                  width: null,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                }}>
                <Text style={{color: 'white'}}>61s</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'AvenirLTStd-Roman', fontSize: 10}}>
                  Cotton
                </Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>
        <View style={{margin: 5}}>
          <View>
            <Text style={{fontFamily: 'AvenirLTStd-Roman', fontSize: 13}}>
              Corded, Ring, Frame, Weaving, Compact, Combed
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Icon name="folder" style={{marginRight: 5}}></Icon>
                <Text style={style.cardtext}>Quantity</Text>
              </View>
              <Text style={style.cardtext}>18 Tons</Text>
            </View>
            <View style={{marginLeft: 15}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="calendar" style={{marginRight: 5}}></Icon>

                <Text style={style.cardtext}>Placed on</Text>
              </View>
              <Text style={style.cardtext}>18/07/2020</Text>
            </View>
          </View>
        </View>
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
          <Text style={{color: 'white'}}>See Quotes/Messages</Text>
        </TouchableOpacity>
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
    backgroundColor: '#F99F23',
  },

  text: {
    color: 'black',
    fontSize: 8,
  },

  cardtext: {
    color: 'black',
    fontSize: 9,
  },
  rowbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
