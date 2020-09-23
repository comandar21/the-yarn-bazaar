import React, {Component, useState, useRef, useEffect} from 'react';
import {Text, View, Icon, Card, Tab, Tabs} from 'native-base';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import ExploreCard from '../components/ExploreCard';
// import SearchList from '../components/SearchList';

const Explore = ({navigation}) => {
  const [display, setDisplay] = useState(false);

  const searchArray = [
    {id: '1', name: '60sCotton'},
    {id: '2', name: '1/60/1 Texurize'},
    {id: '3', name: '10s Cotton'},
    {id: '4', name: '2s Hemp'},
    {id: '5', name: '60s Weaving'},
  ];

  return (
    <View style={style.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          alignItems: 'center',
          height: 60,
        }}>
        <View style={{flex: 8, margin: 5, borderRadius: 50}}>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              backgroundColor: '#d3d3d3',
              flexDirection: 'row',
              height: 40,
            }}
            onPress={() => {
              setDisplay(!display);
            }}>
            <FeatherIcon name="search" size={25} style={{margin: 5}} />
            <TextInput placeholder="Search" />
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <FontAwesomeIcon name="heart" size={25} />
        </View>
      </View>
      {display && (
        <View style={{height: '100%', width: null, backgroundColor: 'white'}}>
          <Tabs
            tabBarActiveTextColor="black"
            tabBarInactiveTextColor="grey"
            locked
            tabBarUnderlineStyle={{backgroundColor: '#F99F23'}}>
            <Tab
              heading="Product"
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}}>
              <SearchList array={searchArray} />
            </Tab>
            <Tab
              heading="Supplier"
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}}>
              <SearchList array={searchArray} />
            </Tab>
          </Tabs>
        </View>
      )}
      <View>
        <View style={{margin: 10}}>
          <Text>Recents</Text>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
          </ScrollView>
        </View>
      </View>
      <View>
        <View style={{margin: 10}}>
          <Text>Explore</Text>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Explore;

const SearchList = (props) => {
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
