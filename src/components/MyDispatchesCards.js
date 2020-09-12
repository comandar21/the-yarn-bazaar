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
import StepIndicator from 'react-native-step-indicator';

const MyOrdersCard = ({navigation}) => {
  const labels = ['Planned', 'Dispatched', 'Received', 'Closed'];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#E28135',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#E28135',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#E28135',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#E28135',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#E28135',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#E28135',
  };

  const pressHandler = () => {
    navigation.navigate('Splashscreen');
  };

  return (
    <Card>
      <View>
        <Text style={{color: '#E28135', margin: 5}}>Planned</Text>
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
          <Text style={{color: '#E28135'}}>61sCotton,Combed</Text>
        </View>
      </View>
      <View style={{marginLeft: 10}}>
        <Text>Quantity - 9 Tons</Text>
      </View>
      <View style={{marginTop: 10}}>
        <StepIndicator
          stepCount={4}
          customStyles={customStyles}
          labels={labels}
          currentPosition={2}
        />
      </View>
      <View style={{marginLeft: 10}}>
        <Text style={style.cardtext}>
          Estimated Date of Receving : 31/08/20
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E28135',
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
              borderColor: '#E28135',
              borderWidth: 1,
            }}>
            <Text style={{color: '#E28135'}}>More Info</Text>
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
    backgroundColor: '#E28135',
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
