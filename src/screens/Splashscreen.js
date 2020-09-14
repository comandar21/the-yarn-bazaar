import React, {Component} from 'react';
import {View, Text, Button} from 'native-base';
import {StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const Splashscreen = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Animatable.Image
          animation="bounceIn"
          source={require('./media/onlylogo.jpg')}
          style={style.logo}
          resizeMode="stretch"></Animatable.Image>
      </View>
      <Animatable.View animation="fadeInUpBig" style={style.footer}>
        <Text style={style.title}>SignIn with Account</Text>
        <View style={style.button}>
          <TouchableOpacity onPress={pressHandler}>
            <LinearGradient colors={['orange', '#ffbf00']} style={style.signIn}>
              <Text>Get Started</Text>
              <Icon name="navigate-next" color="white" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Splashscreen;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
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
