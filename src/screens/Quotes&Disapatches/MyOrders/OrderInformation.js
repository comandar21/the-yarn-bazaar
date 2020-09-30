import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Header,
  Left,
  Body,
  Content,
  List,
  ListItem,
  Right,
} from 'native-base';
import {StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  header: {
    backgroundColor: '#ffffff',
  },
  list: {
    backgroundColor: '#ffffff',
  },
  listItem: {
    fontSize: 17,
    fontFamily: 'AvenirLTStd-Roman',
    color: '#38454F',
    paddingLeft: 10,
  },
  innnerCard: {
    borderRadius: 5,
    width: 52,
    height: 66,
    marginRight: 10,
  },
  complaintView: {
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    height: 50,
    justifyContent: 'center',
    borderTopWidth: 0.1,
  },
  complaintText: {color: 'red'},

  top_view: {
    flexDirection: 'row',
  },
  pending_view: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 10,
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
  cardContentView: {
    height: 66,
    width: 200,
  },
  cardTitle: {
    fontFamily: 'AvenirLTStd-Roman',
    fontSize: 17,
    marginTop: 15,
    color: '#38454F',
    color: 'blue',
  },
  cardTextView: {
    height: 30,
    marginTop: 15,
  },
  cardText: {
    fontSize: 13,
    fontFamily: 'AvenirLTStd-Roman',
  },
  text: {
    fontSize: 17,
    fontFamily: 'AvenirLTStd-Roman',
  },
});

const OrderInformation = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('QuotesDispatches');
  };

  return (
    <View style={style.container}>
      <Header style={style.header}>
        <Left>
          <Icon name="arrow-back" onPress={pressHandler} />
        </Left>
        <Body style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Order Information</Text>
        </Body>
        <Right>
          <Text>Call Us</Text>
        </Right>
      </Header>
      <Content>
        <View style={{marginTop: 15, backgroundColor: '#ffffff', padding: 10}}>
          <View style={style.top_view}>
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
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              justifyContent: 'space-between',
              padding: 5,
            }}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <FeatherIcon
                  name="folder"
                  style={{marginRight: 5}}></FeatherIcon>
                <Text style={style.cardText}>Quantity</Text>
              </View>
              <Text style={style.text}>18 Tons</Text>
            </View>
            <View style={{marginLeft: 15}}>
              <View style={{flexDirection: 'row'}}>
                <FeatherIcon
                  name="folder"
                  style={{marginRight: 5}}></FeatherIcon>
                <Text style={style.cardText}>Price</Text>
              </View>
              <Text style={style.text}>200/kg</Text>
            </View>
            <View style={{marginLeft: 15}}>
              <View style={{flexDirection: 'row'}}>
                <FeatherIcon
                  name="calendar"
                  style={{marginRight: 5}}></FeatherIcon>
                <Text style={style.cardText}>Placed on</Text>
              </View>
              <Text style={style.text}>18/07/2020</Text>
            </View>
          </View>
        </View>
        <View style={style.pending_view}>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#F99F23', marginBottom: 10}}>
              Pending Quantity
            </Text>
            <Text>9 TONS</Text>
          </View>
          <View style={{marginTop: 10}}>
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
        </View>
        <View style={{marginTop: 10}}>
          <List style={style.list}>
            <ListItem>
              <FeatherIcon name="truck" />
              <Left>
                <Text style={style.listItem}>All Dispatches</Text>
              </Left>
              <Right>
                <Icon name="navigate-next" color="#38454F" size={20} />
              </Right>
            </ListItem>
            <ListItem>
              <FeatherIcon name="user" />
              <Left>
                <Text style={style.listItem}>Super Profile</Text>
              </Left>
              <Right>
                <Icon name="navigate-next" color="#38454F" size={20} />
              </Right>
            </ListItem>
            <ListItem>
              <FeatherIcon name="message-square" />
              <Left>
                <Text style={style.listItem}>My Requirement Chat</Text>
              </Left>
              <Right>
                <Icon name="navigate-next" color="#38454F" size={20} />
              </Right>
            </ListItem>
            <ListItem>
              <FeatherIcon name="image" />
              <Left>
                <Text style={style.listItem}>Media & Docs</Text>
              </Left>
              <Right>
                <Icon name="navigate-next" color="#38454F" size={20} />
              </Right>
            </ListItem>
            <ListItem>
              <FeatherIcon name="image" />
              <Left>
                <Text style={style.listItem}>Payment Details</Text>
              </Left>
              <Right>
                <Icon name="navigate-next" color="#38454F" size={20} />
              </Right>
            </ListItem>
          </List>
        </View>
        <View style={{marginTop: 10}}>
          <List style={style.list}>
            <ListItem>
              <Text>Register Complaint</Text>
            </ListItem>
            <ListItem>
              <Text>Repost Enquiry</Text>
            </ListItem>
            <ListItem>
              <Text style={{color: '#F99F23'}}>Help</Text>
            </ListItem>
          </List>
        </View>
      </Content>
    </View>
  );
};

export default OrderInformation;
