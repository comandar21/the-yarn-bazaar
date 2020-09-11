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
  Icon,
  Card,
  CardItem,
  Thumbnail,
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {color} from 'react-native-reanimated';

const ExploreCard = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Splashscreen');
  };

  return (
    <Card>
      <View>
        <Text style={{color: 'orange', margin: 5}}>Recent</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 3, margin: 5}}>
          <Card style={{borderRadius: 5}}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#2B3856',
                  height: 70,
                  width: null,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                }}>
                <Text style={{color: 'white'}}>60s</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>Cotton</Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>

        <View style={{flex: 3, margin: 5}}>
          <Card style={{borderRadius: 5}}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#2B3856',
                  height: 70,

                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                }}>
                <Text style={{color: 'white'}}>200/100/</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>Cotton</Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>

        <View style={{flex: 3, margin: 5}}>
          <Card style={{borderRadius: 5}}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#2B3856',
                  height: 70,
                  width: null,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                }}>
                <Text style={{color: 'white'}}>60s</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>Cotton</Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>

        <View style={{flex: 3, margin: 5}}>
          <Card style={{borderRadius: 5}}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#2B3856',
                  height: 70,
                  width: null,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                }}>
                <Text style={{color: 'white'}}>60s</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>Cotton</Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    </Card>
  );
};

export default ExploreCard;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4FA',
  },

  button: {
    marginTop: 5,
    borderRadius: 5,
    marginLeft: 5,
    backgroundColor: 'white',
    height: 30,
    width: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainbutton: {
    marginTop: 5,
    borderRadius: 5,
    marginLeft: 5,
    backgroundColor: 'orange',
  },

  text: {
    color: 'black',
    fontSize: 4,
  },

  cardtext: {
    color: 'black',
    fontSize: 5,
  },
  rowbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
