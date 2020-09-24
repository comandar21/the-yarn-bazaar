import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Card,
  List,
  ListItem,
  Right,
  Left,
} from 'native-base';
import {StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  },
  cardTextView: {
    height: 30,
    marginTop: 15,
    width: 170,
  },
  cardText: {
    marginTop: 15,
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#E18335',
    fontFamily: 'AvenirLTStd-Book',
  },
});

const About = ({navigation}) => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>Materials</Text>
      </View>
      <View style={{marginLeft: 16, marginRight: 16}}>
        <Card style={style.card}>
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
              <Text style={style.cardTitle}>SINTEX Mills</Text>
            </View>
            <View>
              <Text style={style.cardText}>
                Combed, Compact, Ring, Frame, Weaving
              </Text>
            </View>
          </View>
          <View style={style.qtyTextView}>
            <Text style={style.qtyText}>4 Tons</Text>
          </View>
        </Card>
        <Card style={style.card}>
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
              <Text style={style.cardTitle}>SINTEX Mills</Text>
            </View>
            <View>
              <Text style={style.cardText}>
                Combed, Compact, Ring, Frame, Weaving
              </Text>
            </View>
          </View>
          <View style={style.qtyTextView}>
            <Text style={style.qtyText}>4 Tons</Text>
          </View>
        </Card>
      </View>
      <View style={{marginTop: 15}}>
        <List style={{backgroundColor: '#ffffff'}}>
          <ListItem>
            <Left>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'AvenirLTStd-Roman',
                  color: '#38454F',
                }}>
                Driver Number
              </Text>
            </Left>
            <Text
              style={{
                color: '#3C3C43',
                fontSize: 17,
                fontFamily: 'AvenirLTStd-Roman',
              }}>
              +91 55555 66666
            </Text>
            <Right>
              <Icon name="navigate-next" color="#38454F" size={20} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'AvenirLTStd-Roman',
                  color: '#38454F',
                }}>
                Dispatch Date
              </Text>
            </Left>
            <Text
              style={{
                color: '#3C3C43',
                fontSize: 17,
                fontFamily: 'AvenirLTStd-Roman',
              }}>
              20/07/2020
            </Text>
            <Right>
              <Icon name="navigate-next" color="#38454F" size={20} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'AvenirLTStd-Roman',
                  color: '#38454F',
                }}>
                Receiving Date
              </Text>
            </Left>
            <Right>
              <Icon name="navigate-next" color="#38454F" size={20} />
            </Right>
          </ListItem>
        </List>
      </View>
    </View>
  );
};

export default About;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;
