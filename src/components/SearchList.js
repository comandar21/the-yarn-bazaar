import React, {Component} from 'react';
import {Container, View, Text, List, ListItem} from 'native-base';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import filter from 'lodash.filter';

const ProductSearch = (props) => {
  const {array} = props;
  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '5%',
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={array}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => alert('Item pressed!')}>
            <View
              style={{
                flexDirection: 'row',
                padding: 16,
                alignItems: 'center',
              }}>
              <Text
                key={item.key}
                category="s1"
                style={{
                  color: '#000',
                }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default ProductSearch;

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
    fontSize: 20,
  },
});
