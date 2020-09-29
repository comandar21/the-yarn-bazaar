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

  const pressHandler = () => {
    navigation.navigate('DispatchInformation');
  };
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#F99F23',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#F99F23',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#F99F23',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#F99F23',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 12,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#F99F23',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 12,
    currentStepLabelColor: '#F99F23',
  };

  console.log(navigation);

  return (
    <Card>
      <View>
        <Text
          style={{
            color: '#F99F23',
            margin: 5,
            fontFamily: 'AvenirLTStd-Roman',
            fontSize: 10,
          }}>
          Planned
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, margin: 4}}>
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
          <Text
            style={{
              marginTop: 5,
              fontFamily: 'AvenirLTStd-Roman',
              fontSize: 17,
            }}>
            SINTEX MILLS
          </Text>
          <Text style={{color: '#F99F23'}}>61sCotton,Combed</Text>
        </View>
      </View>
      <View style={{marginLeft: 5}}>
        <Text style={{fontFamily: 'AvenirLTStd-Roman', fontSize: 15}}>
          Quantity - 9 Tons
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <StepIndicator
          stepCount={4}
          customStyles={customStyles}
          labels={labels}
          currentPosition={2}
        />
      </View>
      <View style={{marginLeft: 5}}>
        <Text style={style.cardtext}>
          Estimated Date of Receving : 31/08/20
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
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
            <Text style={{color: 'white', fontFamily: 'AvenirLTStd-Roman'}}>
              Messages
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              margin: 5,
              width: null,
              height: 40,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#F99F23',
              borderWidth: 1,
            }}
            onPress={pressHandler}>
            <Text style={{color: '#F99F23', fontFamily: 'AvenirLTStd-Roman'}}>
              More Info
            </Text>
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
