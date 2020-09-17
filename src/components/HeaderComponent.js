import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Modal} from 'react-native';
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
import Snackbar from 'react-native-snackbar';
import SnackBar from 'react-native-snackbar-component';

const HeaderComponent = () => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [snackVisible, setSnackVisible] = useState(false);

  // const[drawerVisible,setDrawerVisible]=useState(false)

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
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

  const snackBar = () => {
    Snackbar.show({
      text: 'Hello world',
      duration: Snackbar.LENGTH_INDEFINITE,
      action: {
        text: 'UNDO',
        textColor: 'green',
        onPress: () => {
          Snackbar.dismiss();
        },
      },
      useNativeDriver: true,
    });
  };

  return (
    <View>
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
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        useNativeDriver={true}>
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
            <View style={style.button}>
              <TouchableOpacity
                style={style.signIn}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setSnackVisible(true);
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
      <SnackBar
        visible={snackVisible}
        textMessage={`you are Successfully Logged in  ${data.username}`}
        actionHandler={() => {
          setSnackVisible(!snackVisible);
        }}
        actionText="OK"
      />
    </View>
  );
};

export default HeaderComponent;

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
