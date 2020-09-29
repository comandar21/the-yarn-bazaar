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
  Content,
} from 'native-base';
import {StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AboutCards from '../../../../components/AboutCards';

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

  list: {
    backgroundColor: '#ffffff',
  },
  listItem: {
    fontSize: 17,
    fontFamily: 'AvenirLTStd-Roman',
    color: '#38454F',
  },
  complaintView: {
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    height: 50,
    justifyContent: 'center',
  },
  complaintText: {color: 'red'},
});

const About = ({navigation}) => {
  return (
    <View style={style.container}>
      <Content>
        <View>
          <Text style={style.title}>Materials</Text>
        </View>
        <View style={{marginLeft: 16, marginRight: 16}}>
          <AboutCards />
          <AboutCards />
          <AboutCards />
          <AboutCards />
          <AboutCards />
        </View>
        <View style={{marginTop: 15}}>
          <List style={style.list}>
            <ListItem>
              <Left>
                <Text style={style.listItem}>Driver Number</Text>
              </Left>
              <Text style={style.listItem}>+91 55555 66666</Text>
              <Right>
                <Icon name="navigate-next" color="#38454F" size={20} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={style.listItem}>Dispatch Date</Text>
              </Left>
              <Text style={style.listItem}>20/07/2020</Text>
              <Right>
                <Icon name="navigate-next" color="#38454F" size={20} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={style.listItem}>Receiving Date</Text>
              </Left>
              <Right>
                <Icon name="navigate-next" color="#38454F" size={20} />
              </Right>
            </ListItem>
          </List>
        </View>
        <View style={{marginTop: 10}}>
          <TouchableOpacity>
            <View style={style.complaintView}>
              <Text style={style.complaintText}>Send a Complaint</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Content>
    </View>
  );
};

export default About;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;
