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
  Tab,
  Tabs,
  ScrollableTab,
  Title,
  Button,
  Text,
  View,
  Card,
  CardItem,
} from 'native-base';

import {StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const PostYarnRequirements = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Splashscreen');
  };

  return (
    <Container>
      <Header style={style.header}>
        <Left>
          <Button transparent>
            <Icon name="menu" style={style.title} />
          </Button>
        </Left>
        <Body>
          <Title style={style.title}>Post Yarn Requirements </Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="person" style={style.title}></Icon>
          </Button>
        </Right>
      </Header>
    </Container>
  );
};

export default PostYarnRequirements;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
  },
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },

  title: {
    color: 'black',
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },

  button: {
    alignItems: 'center',
    marginTop: 50,
  },

  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
  },
});
