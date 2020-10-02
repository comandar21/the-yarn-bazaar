import React, {Component, useState} from 'react';
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const PlanDispatchCard = ({navigation}) => {
  // const pressHandler = () => {
  //   navigation.navigate('Splashscreen');
  // };

  const [plan, setplan] = useState(false);

  const planExpand = () => {
    setplan(!plan);
  };

  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F6F6',
    },

    title: {
      fontFamily: 'AvenirLTStd-Roman',
      fontSize: 17,
      color: '#38454F',
      marginLeft: 16,
      marginTop: 10,
    },
    innnerCard: {
      borderRadius: 5,
      width: 52,
      height: 66,
      marginRight: 10,
    },
    cardView: {
      marginTop: 10,
    },
    card: {
      padding: 10,
      height: 90,
      width: null,
      flexDirection: 'row',
    },

    cardContentView: {
      height: 66,
      width: 200,
    },
    cardTitle: {
      fontFamily: 'AvenirLTStd-Roman',
      fontSize: 15,
      color: '#38454F',
      marginTop: 15,
    },
    cardTextView: {
      height: 30,
      marginTop: 15,
      width: 170,
    },
    cardText: {
      fontSize: 12,
      fontFamily: 'AvenirLTStd-Roman',
    },

    innerCardLogo: {
      height: 52,
      width: 52,
      backgroundColor: '#38454F',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerCardLogoText: {
      height: 14,
      width: 52,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#38454F',
    },
    qtyTextView: {
      alignItems: 'flex-end',
      marginLeft: 40,
    },

    qtyText: {
      fontSize: 15,
      color: '#E18335',
      fontFamily: 'AvenirLTStd-Book',
    },
    accodiontext: {
      fontSize: 12,
      fontFamily: 'AvenirLTStd-Roman',
      color: '#38454F',
    },
    cardtextunderline: {
      fontSize: 12,
      fontFamily: 'AvenirLTStd-Roman',
      textDecorationLine: 'underline',
      color: '#38454F',
    },
  });

  return (
    <Card>
      <View style={style.card}>
        <View style={style.innnerCard}>
          <TouchableOpacity>
            <View style={style.innerCardLogo}>
              <Text style={{color: 'white'}}>61s</Text>
            </View>
            <View style={style.innerCardLogoText}>
              <Text style={{fontSize: 10, fontFamily: 'AvenirLTStd-Roman'}}>
                Cotton
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={style.cardContentView}>
          <View>
            <Text style={style.cardText}>
              Combed, Compact, Ring, Frame, Weaving
            </Text>
          </View>
          <View>
            <Text style={style.cardTitle}>SINTEX Mills</Text>
          </View>
        </View>
        <View style={style.qtyTextView}>
          <TouchableOpacity onPress={() => planExpand()}>
            <Icon
              name={plan ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={30}
              color={'#E18335'}
            />
          </TouchableOpacity>
          <View>
            <Text style={style.qtyText}>9 Tons</Text>
            <Text style={{color: 'grey', fontSize: 10}}>Pending</Text>
          </View>
        </View>
      </View>
      <View>
        {plan && (
          <View style={{margin: 5}}>
            <View style={{marginLeft: 70}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{height: 12, width: 70}}>
                  <Text style={style.accodiontext}>Quantity</Text>
                </View>
                <View>
                  <Text style={style.cardtextunderline}>9 Tons</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={{height: 12, width: 70}}>
                  <Text style={style.accodiontext}>Date</Text>
                </View>
                <View>
                  <Text style={style.cardtextunderline}>20/07/2020</Text>
                </View>
                <FeatherIcon
                  name="calendar"
                  style={{marginLeft: 10}}></FeatherIcon>
              </View>
            </View>
            <View style={{marginTop: 15}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#F99F23',
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
        )}
      </View>
    </Card>
  );
};

export default PlanDispatchCard;
