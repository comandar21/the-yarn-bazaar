import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Button,
  Container,
  Header,
  Content,
  Accordion,
  Card,
} from 'native-base';
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PaymentCard from '../../../../components/PaymentCards';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  content: {
    padding: 15,
  },
});

const view = () => {
  return <Text>hello</Text>;
};

const dataArray = [{title: 'Invoice', content: ''}];

const Payment = ({navigation}) => {
  return (
    <View style={style.container}>
      <Content style={style.content}>
        <PaymentCard />
        <PaymentCard />
      </Content>
    </View>
  );
};

export default Payment;
