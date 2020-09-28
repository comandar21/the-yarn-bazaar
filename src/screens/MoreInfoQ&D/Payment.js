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
    paddingLeft: 10,
    alignItems: 'center',
  },
});

const view = () => {
  return <Text>hello</Text>;
};

const dataArray = [{title: 'Invoice', content: ''}];

const Payment = ({navigation}) => {
  const [invoice, setInvoice] = useState(false);
  const [convenience, setConvenience] = useState(false);

  const invoiceExpand = () => {
    setInvoice(!invoice);
  };

  const convenienceExpand = () => {
    setConvenience(!convenience);
  };

  return (
    <View style={style.container}>
      <Content style={{padding: 15}}>
        <Card>
          <View>
            <TouchableOpacity style={style.row} onPress={() => invoiceExpand()}>
              <View style={{width: 150, height: 14}}>
                <Text style={{fontSize: 17}}>Invoice</Text>
              </View>
              <Text style={{color: '#E18335', marginLeft: 90, fontSize: 17}}>
                Completed
              </Text>
              <Icon
                name={invoice ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={30}
                color={'#E18335'}
              />
            </TouchableOpacity>
            <View style={style.parentHr} />
            {invoice && (
              <View style={{padding: 20}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{height: 12, width: 120}}>
                    <Text
                      style={{fontSize: 13, fontFamily: 'AvenirLTStd-Roman'}}>
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
                      <Text
                        style={{fontSize: 12, fontFamily: 'AvenirLTStd-Roman'}}>
                        Bank Details
                      </Text>
                    </View>
                    <Text style={{marginRight: 5}}>:</Text>
                    <Text
                      style={{fontSize: 15, fontFamily: 'AvenirLTStd-Roman'}}>
                      ABC Pvt Limited
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <View style={{height: 12, width: 120}}>
                      <Text
                        style={{fontSize: 12, fontFamily: 'AvenirLTStd-Roman'}}>
                        Account No
                      </Text>
                    </View>
                    <Text style={{marginRight: 5}}>:</Text>
                    <Text
                      style={{fontSize: 15, fontFamily: 'AvenirLTStd-Roman'}}>
                      20004569000
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{height: 12, width: 120}}>
                      <Text
                        style={{fontSize: 12, fontFamily: 'AvenirLTStd-Roman'}}>
                        IFSC Code
                      </Text>
                    </View>
                    <Text style={{marginRight: 5}}>:</Text>
                    <Text
                      style={{fontSize: 15, fontFamily: 'AvenirLTStd-Roman'}}>
                      ABC00001
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{height: 12, width: 120}}>
                    <Text
                      style={{fontSize: 13, fontFamily: 'AvenirLTStd-Roman'}}>
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
        <Card>
          <View>
            <TouchableOpacity
              style={style.row}
              onPress={() => convenienceExpand()}>
              <View style={{width: 150, height: 14}}>
                <Text style={{fontSize: 17}}>Convenience Fees</Text>
              </View>
              <Text style={{color: '#E18335', marginLeft: 90, fontSize: 17}}>
                Completed
              </Text>
              <Icon
                name={convenience ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={30}
                color={'#E18335'}
              />
            </TouchableOpacity>
            <View style={style.parentHr} />
            {convenience && (
              <View style={{padding: 20}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{height: 12, width: 120}}>
                    <Text
                      style={{fontSize: 13, fontFamily: 'AvenirLTStd-Roman'}}>
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
                      <Text
                        style={{fontSize: 12, fontFamily: 'AvenirLTStd-Roman'}}>
                        Bank Details
                      </Text>
                    </View>
                    <Text style={{marginRight: 5}}>:</Text>
                    <Text
                      style={{fontSize: 15, fontFamily: 'AvenirLTStd-Roman'}}>
                      ABC Pvt Limited
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <View style={{height: 12, width: 120}}>
                      <Text
                        style={{fontSize: 12, fontFamily: 'AvenirLTStd-Roman'}}>
                        Account No
                      </Text>
                    </View>
                    <Text style={{marginRight: 5}}>:</Text>
                    <Text
                      style={{fontSize: 15, fontFamily: 'AvenirLTStd-Roman'}}>
                      20004569000
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{height: 12, width: 120}}>
                      <Text
                        style={{fontSize: 12, fontFamily: 'AvenirLTStd-Roman'}}>
                        IFSC Code
                      </Text>
                    </View>
                    <Text style={{marginRight: 5}}>:</Text>
                    <Text
                      style={{fontSize: 15, fontFamily: 'AvenirLTStd-Roman'}}>
                      ABC00001
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{height: 12, width: 120}}>
                    <Text
                      style={{fontSize: 13, fontFamily: 'AvenirLTStd-Roman'}}>
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
      </Content>
    </View>
  );
};

export default Payment;
