import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = () => {
  return <TouchableOpacity style={style.container}></TouchableOpacity>;
};

const style = StyleSheet.create({
  container: {
    width: '100%',
  },
});
