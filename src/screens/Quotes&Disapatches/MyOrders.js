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
import FeatherIcon from 'react-native-vector-icons/Feather';
import MyOrdersCard from '../../components/MyOrdersCard';

const MyOrders = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Splashscreen');
  };

  return (
    <View style={style.container}>
      <View style={(style.rowbutton, {margin: 5})}>
        <ScrollView horizontal={true}>
          <Button style={style.button}>
            <Text style={style.text}>All</Text>
          </Button>
          <Button style={style.button}>
            <Text style={style.text}>Planned</Text>
          </Button>
          <Button style={style.button}>
            <Text style={style.text}>Dispatched</Text>
          </Button>
          <Button style={style.button}>
            <Text style={style.text}>Received</Text>
          </Button>
          <Button style={style.button}>
            <Text style={style.text}>Received</Text>
          </Button>
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'orange',
              margin: 10,
              width: null,
              height: 40,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Plan Dispatch</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              margin: 10,
              width: null,
              height: 40,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <FeatherIcon
                name="sliders"
                size={16}
                style={{marginRight: 5, color: 'grey'}}
              />
              <Text style={style.cardtext}>Sort/Filter</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Content style={{margin: 10}}>
        <MyOrdersCard />
        <MyOrdersCard />

        <MyOrdersCard />
      </Content>
    </View>
  );
};

export default MyOrders;

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
    fontSize: 8,
  },

  cardtext: {
    fontSize: 16,
    color: 'grey',
  },
  rowbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
