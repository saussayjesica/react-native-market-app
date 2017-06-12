import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Rating from './Rating'

export default class MarketInfo extends Component {


  render() {
    const { hours, other, phone } = this.props.data
    return (
        <View style={styles.container}>
          <Text style={styles.title}>HOURS</Text>
          <View>
            <Text style={styles.info}>{other}</Text>
          </View>
            <View style={styles.weekdays}>
              <Image style={styles.weekdayImage} source={!hours.mon ? require('./assets/images/monOff.png') : require('./assets/images/monOn.png')}/>
              <Image style={styles.weekdayImage} source={!hours.tues ? require('./assets/images/tuesOff.png') : require('./assets/images/tuesOn.png')}/>
              <Image style={styles.weekdayImage} source={!hours.wed ? require('./assets/images/wedOff.png') : require('./assets/images/wedOn.png')}/>
              <Image style={styles.weekdayImage} source={!hours.thurs ? require('./assets/images/thursOff.png') : require('./assets/images/thursOn.png')}/>
              <Image style={styles.weekdayImage} source={!hours.fri ? require('./assets/images/friOff.png') : require('./assets/images/friOn.png')}/>
              <Image style={styles.weekdayImage} source={!hours.sat ? require('./assets/images/satOff.png') : require('./assets/images/satOn.png')}/>
              <Image style={styles.weekdayImage} source={!hours.sun ? require('./assets/images/sunOff.png') : require('./assets/images/sunOn.png')}/>
            </View>
            <Text style={styles.info}>Phone: {phone}</Text>
        </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 8,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30
  },
  title: {
    letterSpacing: 3,
    fontWeight: '600',
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center'
  },
  info: {
    color: '#4A4A4A',
    fontSize: 12,
    paddingTop: 10
  },
  weekdays: {
    flexDirection: 'row',
    paddingTop: 17,
    paddingBottom: 10
  },
  weekdayImage: {
  marginRight: 3,
  width: 30,
  height: 30
  }
});
