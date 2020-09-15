import React, {Component} from 'react';
import {View, Text, Button} from 'native-base';
import {StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const AboutUs = ({navigation}) => {
  return (
    <View style={style.container}>
      <Text>AboutUs screen</Text>
    </View>
  );
};

export default AboutUs;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: '#05357a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    width: '100%',
    height: height_logo,
  },

  text: {
    color: 'grey',
    marginTop: 5,
  },

  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },

  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },

  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
