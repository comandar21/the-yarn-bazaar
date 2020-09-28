import React, {Component} from 'react';
import {View, Text, Button, Content, List, ListItem} from 'native-base';
import {StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const Document = ({navigation}) => {
  return (
    <View style={style.container}>
      <Content>
        <List style={{backgroundColor: '#fff'}}>
          <ListItem style={{width: null, height: 77}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 57,
                  width: 46,
                  backgroundColor: '#fdfd00',
                }}>
                <Text>File Image </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 17}}>
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: 'AvenirLTStd-Roman',
                    color: '#38454F',
                  }}>
                  Invoice.pdf
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'AvenirLTStd-Roman',
                    color: '#979797',
                  }}>
                  2 pages . 102 KB . pdf
                </Text>
              </View>
            </View>
          </ListItem>
          <ListItem style={{width: null, height: 77}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 57,
                  width: 46,
                  backgroundColor: '#fd00fd',
                }}>
                <Text>File Image </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 17}}>
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: 'AvenirLTStd-Roman',
                    color: '#38454F',
                  }}>
                  Invoice.pdf
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'AvenirLTStd-Roman',
                    color: '#979797',
                  }}>
                  2 pages . 102 KB . pdf
                </Text>
              </View>
            </View>
          </ListItem>
          <ListItem style={{width: null, height: 77}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 57,
                  width: 46,
                  backgroundColor: '#fdfd00',
                }}>
                <Text>File Image </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 17}}>
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: 'AvenirLTStd-Roman',
                    color: '#38454F',
                  }}>
                  Invoice.pdf
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'AvenirLTStd-Roman',
                    color: '#979797',
                  }}>
                  2 pages . 102 KB . pdf
                </Text>
              </View>
            </View>
          </ListItem>
        </List>
      </Content>
    </View>
  );
};

export default Document;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
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
