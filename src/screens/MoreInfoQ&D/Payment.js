import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Button,
  Container,
  Header,
  Content,
  Accordion,
  Card,
} from 'native-base';
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  parentHr: {
    height: 1,
    color: '#ffffff',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

const view = () => {
  return <Text>hello</Text>;
};

const dataArray = [{title: 'Invoice', content: ''}];

const Payment = ({navigation}) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand({expand: !expand});
  };

  return (
    <View style={style.container}>
      <Card>
        <View>
          <TouchableOpacity style={style.row} onPress={() => toggleExpand()}>
            <Text>Invoice</Text>
            <Icon
              name={expand ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={30}
            />
          </TouchableOpacity>
          <View style={style.parentHr} />
          {expand && (
            <View>
              <Text>hello</Text>
            </View>
          )}
        </View>
      </Card>
    </View>
  );
};

export default Payment;
