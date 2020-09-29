import React, {Component} from 'react';
import {
  Container,
  Text,
  View,
  Icon,
  Card,
  Tabs,
  Tab,
  Header,
  Left,
  Body,
} from 'native-base';
import {StyleSheet, TouchableOpacity, Image, StatusBar} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import About from './MoreInfoQ&D/About';
import Document from './MoreInfoQ&D/Document';
import Payment from './MoreInfoQ&D/Payment';

const MoreInfoQD = ({navigation}) => {
  const labels = ['Planned', 'Dispatched', 'Received', 'Closed'];


  const pressHandler = () => {
    navigation.navigate('MoreInfoQD');
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

  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F6F6',
    },
    header: {
      backgroundColor: '#ffffff',
    },
  });

  return (
    <Container style={style.container}>
      <Header style={style.header}>
        <Left>
          <Icon name="arrow-back" />
        </Left>
        <Body>
          <Text>Dispatch Information</Text>
        </Body>
      </Header>
      <Card style={{padding: 5}}>
        <View>
          <Text
            style={{
              color: '#F99F23',
              margin: 5,
              fontFamily: 'AvenirLTStd-Roman',
              fontSize: 10,
            }}>
            PLANNED
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, margin: 4}}>
            <Card style={{borderRadius: 5}}>
              <TouchableOpacity>
                <Image
                  source={require('./media/sin_tex.jpg')}
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
      </Card>
      {/* <Tabs>
          <Tab heading="About">
            <About />
          </Tab>
          <Tab heading="Document">
            <Document />
          </Tab>
          <Tab heading="Payment">
            <Payment />
          </Tab>
        </Tabs> */}
      <Tabs
        tabBarActiveTextColor="black"
        tabBarInactiveTextColor="grey"
        locked
        tabBarUnderlineStyle={{backgroundColor: '#F99F23'}}>
        <Tab
          heading="About"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <About />
        </Tab>
        <Tab
          heading="Document"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <Document />
        </Tab>
        <Tab
          heading="Payment"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <Payment />
        </Tab>
      </Tabs>
    </Container>
  );
};


export default MoreInfoQD;
