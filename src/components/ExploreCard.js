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
    <Card style={style.card}>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#2B3856',
            height: 60,
            width: 75,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}>
          <Text style={{color: 'white'}}>61s</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Cotton</Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default ExploreCard;

const style = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 5,
  },
});
