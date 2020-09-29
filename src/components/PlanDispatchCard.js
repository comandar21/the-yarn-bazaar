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
  Accordion,
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

const PlanDispatchCard = ({navigation}) => {
  // const pressHandler = () => {
  //   navigation.navigate('Splashscreen');
  // };

  return (
    <Card>
      <View>
        <Text style={style.top_cardtext}>Planned</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 4}}>
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
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontFamily: 'AvenirLTStd-Roman', fontSize: 10}}>
                  Cotton
                </Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>
        <View style={{flex: 3, margin: 5}}>
          <View>
            <Text style={{fontFamily: 'AvenirLTStd-Roman', fontSize: 13}}>
              Corded,Ring,Frame,
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Text>Combined</Text>
              <View style={{flexDirection: 'row', marginLeft: 120}}>
                <Text style={{color: 'orange', fontSize: 11}}>9 Tons</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginTop: 5,
                  fontFamily: 'AvenirLTStd-Roman',
                  fontSize: 12,
                }}>
                SINTEX MILLS
              </Text>
              <View style={{flexDirection: 'row', marginLeft: 120}}>
                <Text
                  style={{
                    fontFamily: 'AvenirLTStd-Roman',
                    fontSize: 11,
                  }}></Text>
                <Text style={{color: 'grey', fontSize: 10}}>Pending</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'column', marginTop: 5}}>
            <View style={{flexDirection: 'row', marginRight: 20}}>
              <Text style={style.cardtext}>Quantity</Text>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Text style={style.cardtextunderline}>9 Tons</Text>
              </View>
            </View>

            <View style={{marginTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={style.cardtext}>Date</Text>
                <View style={{flexDirection: 'row', marginLeft: 10}}>
                  <Text style={style.cardtextunderline}>18/07/2020</Text>
                  <Icon name="calendar" style={{marginLeft: 20}}></Icon>
                </View>
              </View>
            </View>
          </View>
        </View>
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
            <Text style={{color: 'white'}}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

export default PlanDispatchCard;

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
    fontFamily: 'AvenirLTStd-Roman',
  },

  top_cardtext: {
    fontSize: 9,
    fontFamily: 'AvenirLTStd-Roman',
    color: '#F99F23',
    margin: 5,
  },

  cardtext: {
    fontSize: 9,
    fontFamily: 'AvenirLTStd-Roman',
  },

  cardtextunderline: {
    fontSize: 9,
    fontFamily: 'AvenirLTStd-Roman',
    textDecorationLine: 'underline',
  },

  rowbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
