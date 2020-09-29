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
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlanDispatchCard from '../../components/PlanDispatchCard';

const PlanDispatch = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Splashscreen');
  };
  return (
    <View style={style.container}>
      <Content style={{margin: 5}}>
      <Header
        searchBar
        rounded
        style={{backgroundColor: 'white', flexDirection: 'row'}}>
          {/* <Right marginRight={60}>
            <Icon name="navigate-next" color="black" size={40 }  />
            </Right> */}
         <Text style={{marginTop:15,marginRight:50,fontSize:20}}>Plan Dispatch</Text>
      
      </Header>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
              <Text style={{marginTop:10,marginBottom:10}}>Plan a Dispatch for Your order</Text>
          </View>
      
        </View>
        <View>
          <PlanDispatchCard/>
          <PlanDispatchCard/>
          <PlanDispatchCard/>
       
        </View>


       
      </Content>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F99F23',
              margin: 5,
              width: null,
              height: 50,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Plan Dispatch </Text>
            

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlanDispatch;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4FA',
  },

  button: {
    margin: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    height: 30,
    width: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    margin: 5,
    width: null,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'black',
    fontSize: 9,
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
  scrollView: {
    margin: 5,
  },
});
