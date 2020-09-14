import React, {useState} from 'react';
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
} from 'native-base';

import {
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Modal,
  TouchableHighlight,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import AllYarns from './AllYarns';
import Cotton from './Cotton';
import Texturize from './Texturize';
import PFS from './PFS';
import Tab5 from './Tab5';

const PostYarnRequirement = () => {
  const [data, setData] = React.useState({
    phoneno: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const [modalVisible, setModalVisible] = useState(false);

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

  return (
    <Container style={style.container}>
      <Header style={style.header}>
        <Left>
          <TouchableOpacity>
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

      <Header
        searchBar
        rounded
        style={{backgroundColor: 'white', flexDirection: 'row'}}>
        <Item
          style={{
            borderRadius: 50,
            backgroundColor: '#d3d3d3',
            flex: 8,
          }}>
          <FeatherIcon name="search" size={25} style={{margin: 5}} />
          <Input placeholder="Search" />
        </Item>
        <Item style={{justifyContent: 'center'}}>
          <FontAwesomeIcon name="heart" size={25} />
        </Item>
      </Header>
      <Tabs
        tabBarUnderlineStyle={{backgroundColor: '#E28135'}}
        renderTabBar={() => <ScrollableTab />}>
        <Tab
          heading="All Yarns"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <AllYarns />
        </Tab>
        <Tab
          heading="Cotton"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <Cotton />
        </Tab>
        <Tab
          heading="Texturize"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <Texturize />
        </Tab>
        <Tab
          heading="PFS"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <PFS />
        </Tab>
        <Tab
          heading="visolai"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <Tab5 />
        </Tab>
      </Tabs>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.text_footer}>Phone No</Text>
            <View style={style.action}>
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
            <Text style={[style.text_footer, {marginTop: 35}]}>Password</Text>
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
            </View>
            <View style={style.button}>
              <TouchableOpacity
                style={style.signIn}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={[style.textSign, {color: 'white'}]}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={style.signUp}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={style.textSign}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default PostYarnRequirement;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4FA',
  },
  tab: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  signIn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F99F23',
  },

  signUp: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#F99F23',
    borderWidth: 1,
    marginTop: 15,
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
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
});
