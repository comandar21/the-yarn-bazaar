import React, {Component, useState} from 'react';
import {View, Text, Button, Card} from 'native-base';
import {StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const style = StyleSheet.create({
  parentHr: {
    height: 1,
    color: '#ffffff',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    alignItems: 'center',
  },
  cardHeadView: {
    width: 150,
    height: 14,
  },
  cardHeadText: {
    fontSize: 17,
  },
});

const PaymentCards = ({navigation}) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <Card>
      <View>
        <TouchableOpacity style={style.row} onPress={() => handleExpand()}>
          <View style={style.cardHeadView}>
            <Text style={style.cardHeadText}>Invoice</Text>
          </View>
          <Text
            style={[style.cardHeadText, {color: '#E18335', marginLeft: 70}]}>
            Completed
          </Text>
          <Icon
            name={expand ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={30}
            color={'#E18335'}
          />
        </TouchableOpacity>
        <View style={style.parentHr} />
        {expand && (
          <View style={{padding: 20}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{height: 12, width: 120}}>
                <Text style={{fontSize: 13, fontFamily: 'AvenirLTStd-Roman'}}>
                  Total Amount
                </Text>
              </View>
              <Text style={{marginRight: 5}}>:</Text>
              <Text style={{fontSize: 15, fontFamily: 'AvenirLTStd-Roman'}}>
                34434554
              </Text>
            </View>
            <View style={{marginTop: 34, marginBottom: 34}}>
              <View style={{flexDirection: 'row', marginBottom: 15}}>
                <View style={{height: 12, width: 120}}>
                  <Text style={{fontSize: 12, fontFamily: 'AvenirLTStd-Roman'}}>
                    Bank Details
                  </Text>
                </View>
                <Text style={{marginRight: 5}}>:</Text>
                <Text style={{fontSize: 15, fontFamily: 'AvenirLTStd-Roman'}}>
                  ABC Pvt Limited
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginBottom: 15}}>
                <View style={{height: 12, width: 120}}>
                  <Text style={{fontSize: 12, fontFamily: 'AvenirLTStd-Roman'}}>
                    Account No
                  </Text>
                </View>
                <Text style={{marginRight: 5}}>:</Text>
                <Text style={{fontSize: 15, fontFamily: 'AvenirLTStd-Roman'}}>
                  20004569000
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{height: 12, width: 120}}>
                  <Text style={{fontSize: 12, fontFamily: 'AvenirLTStd-Roman'}}>
                    IFSC Code
                  </Text>
                </View>
                <Text style={{marginRight: 5}}>:</Text>
                <Text style={{fontSize: 15, fontFamily: 'AvenirLTStd-Roman'}}>
                  ABC00001
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{height: 12, width: 120}}>
                <Text style={{fontSize: 13, fontFamily: 'AvenirLTStd-Roman'}}>
                  Payment Message
                </Text>
              </View>
              <Text style={{marginRight: 5}}>:</Text>
              <View style={{height: 31, width: 190}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'AvenirLTStd-Roman',
                    color: 'blue',
                  }}>
                  Payment Successful. Your account has been debited.
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </Card>
  );
};

export default PaymentCards;
