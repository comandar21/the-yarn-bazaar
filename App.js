import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import {StyleSheet, TouchableOpacity, Modal} from 'react-native';

import Splashscreen from './src/screens/Splashscreen';
import QDTabs from './src/screens/QDTabs';
import PostYarnRequirement from './src/screens/PostYarnRequirement';
import Explore from './src/screens/Explore';
import Notification from './src/screens/Notification';
import AboutUs from './src/screens/AboutUs';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
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
  Tab,
  Tabs,
  ScrollableTab,
  Title,
  Button,
  Text,
  View,
  Label,
} from 'native-base';
import DrawerComponent from './src/components/DrawerComponent';

// import Giftedchat from './src/screens/Giftedchat';
const MainNavigator = createStackNavigator();
const bottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const HomeTabs = () => {
    const [data, setData] = React.useState({
      phoneno: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true,
    });

    const [modalVisible, setModalVisible] = useState(false);
    // const[drawerVisible,setDrawerVisible]=useState(false)

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
    const drawer = () => {
      DrawerComponent();
    };
    return (
      <Container>
        <Header style={style.header}>
          <Left>
            <TouchableOpacity onPress={() => drawer}>
              <FeatherIcon name="menu" style={style.title} size={25} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={style.title}>The Yarn Bazaar</Title>
          </Body>

          <Right>
            <TouchableOpacity>
              <FontAwesomeIcon
                name="user"
                style={style.title}
                size={25}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            </TouchableOpacity>
          </Right>
        </Header>
        <Modal animationType="fade" transparent visible={modalVisible}>
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Item floatingLabel style={{margin: 5}}>
                <Label>Email-Id/Phone-No</Label>
                <Input onChangeText={(val) => textInputChange(val)} />
              </Item>
              <Item floatingLabel style={{margin: 5}}>
                <Label>Password</Label>
                <Input
                  secureTextEntry
                  onChangeText={(val) => hanndlePasswordChange(val)}
                />
              </Item>
              <View style={style.forgotpassword_view}>
                <Text
                  style={style.login_text}
                  onPress={() => {
                    alert('forgot password');
                  }}>
                  Forgot Password ?
                </Text>
              </View>
              {/* <View style={style.action}>
              <FontAwesomeIcon name="phone" color="#05375a" size={20} />
              <TextInput
                placeholder="Phone No"
                keyboardType="phone-pad"
                style={style.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
              {data.check_textInputChange ? (
                <FeatherIcon name="check-circle" color="#F99F23" size={20} />
              ) : null}
            </View>
            <View style={style.action}>
              <FontAwesomeIcon name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={style.textInput}
                autoCapitalize="none"
                onChangeText={(val) => hanndlePasswordChange(val)}
              />
              <TouchableOpacity onPress={updateSeureTextEntry}>
                {data.secureTextEntry ? (
                  <FeatherIcon name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye-off" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View> */}
              <View style={style.button}>
                <TouchableOpacity
                  style={style.signIn}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={style.textSign}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={style.noAccount}>
                <Text>Don't have an Account?</Text>
                <Text>
                  Click{' '}
                  <Text
                    style={style.login_text}
                    onPress={() => {
                      alert('forgot password');
                    }}>
                    here
                  </Text>{' '}
                  to register free
                </Text>
              </View>
            </View>
          </View>
        </Modal>
        <bottomTab.Navigator
          initialRouteName="Explore"
          tabBarOptions={{
            activeTintColor: 'orange',
          }}
          barStyle={{backgroundColor: 'white'}}>
          <bottomTab.Screen
            name="explore"
            component={Explore}
            options={{
              tabBarLabel: 'Explore',
              tabBarIcon: ({color}) => (
                <Icon name="search" color={color} size={25} />
              ),
            }}
          />
          <bottomTab.Screen
            name="Notifications"
            component={PostYarnRequirement}
            options={{
              tabBarLabel: 'Post Yarn Requirements',
              tabBarIcon: ({color}) => (
                <Icon name="bell" color={color} size={25} />
              ),
            }}
          />
          <bottomTab.Screen
            name="Profile"
            component={QDTabs}
            options={{
              tabBarLabel: 'Qoutes & Dispatches',
              tabBarIcon: ({color}) => (
                <Icon name="check-square" color={color} size={25} />
              ),
            }}
          />
        </bottomTab.Navigator>
      </Container>
    );
  };

  const DrawerNavigaton = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Home" component={HomeTabs} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainNavigator.Screen name="Splashscreen" component={Splashscreen} />
        <MainNavigator.Screen name="Home" component={DrawerNavigaton} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;

const style = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    color: 'black',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  signIn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F99F23',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  forgotpassword_view: {
    marginTop: 15,
    alignItems: 'flex-end',
  },
  login_text: {
    fontFamily: 'AvenirLTStd-Roman',
    color: '#F99F23',
  },
  noAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
