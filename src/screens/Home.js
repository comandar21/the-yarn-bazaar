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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {color} from 'react-native-reanimated';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Notification from './Notification';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const Home = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Splashscreen');
  };

  const drawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    );
  };

  return (
    <Container>
      <Header style={style.header}>
        <Left>
          <Button transparent>
            <FeatherIcon name="menu" style={style.title} onPress={drawer} />
          </Button>
        </Left>
        <Body>
          <Title style={style.title}>Home </Title>
        </Body>
        <Right>
          <Button transparent>
            <FontAwesomeIcon name="user" size={25} style={style.title} />
          </Button>
        </Right>
      </Header>
    </Container>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4FA',
  },
  header: {
    backgroundColor: 'white',
  },

  title: {
    color: 'black',
  },
});
