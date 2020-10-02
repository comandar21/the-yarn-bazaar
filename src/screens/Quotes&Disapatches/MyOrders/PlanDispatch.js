import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Left,
  Text,
  View,
  Icon,
  Body,
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
import PlanDispatchCard from '../../../components/PlanDispatchCard';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4FA',
  },
  header: {
    backgroundColor: '#ffffff',
  },
});
const PlanDispatch = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('QuotesDispatches');
  };
  return (
    <Container style={style.container}>
      <Header style={style.header}>
        <Left>
          <Icon name="arrow-back" onPress={pressHandler} />
        </Left>
        <Body>
          <Text>Plan Dispatch</Text>
        </Body>
      </Header>
      <Content style={{margin: 10}}>
        <View>
          <Text style={{marginBottom: 5}}>Plan a Dispatch for Your order</Text>
        </View>
        <View>
          <PlanDispatchCard />
          <PlanDispatchCard />
          <PlanDispatchCard />
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
    </Container>
  );
};

export default PlanDispatch;
