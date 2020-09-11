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
} from 'native-base';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
const Login = ({navigation}) => {
  const [data, setData] = React.useState({
    phoneno: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        phoneno: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        phoneno: val,
        check_textInputChange: false,
      });
    }
  };

  const hanndlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSeureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const pressHandler = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.text_header}>The Yarn Bazaar</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={style.footer}>
        <Text style={style.text_footer}>Phone No</Text>
        <View style={style.action}>
          <FontAwesome name="phone" color="#05375a" size={20} />
          <TextInput
            placeholder="Phone No"
            keyboardType="phone-pad"
            style={style.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Feather name="check-circle" color="orange" size={20} />
          ) : null}
        </View>
        <Text style={[style.text_footer, {marginTop: 35}]}>Password</Text>
        <View style={style.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={style.textInput}
            autoCapitalize="none"
            onChangeText={(val) => hanndlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSeureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye-off" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={style.button}>
          <TouchableOpacity style={style.signIn} onPress={pressHandler}>
            <LinearGradient colors={['orange', '#ffbf00']} style={style.signIn}>
              <Text style={[style.textSign, {color: 'white'}]}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              style.signIn,
              {borderColor: 'orange', borderWidth: 1, marginTop: 15},
            ]}>
            <Text style={style.textSign}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
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
    color: '#05357a',
    fontSize: 30,
    fontWeight: 'bold',
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
});
