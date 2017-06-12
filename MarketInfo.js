import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Rating from './Rating'

export default class MarketInfo extends Component {
  render() {
    const { name, address, suburb, state, postcode, rating, totalRatings, latitude, longitude, phone, website } = this.props.data
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{name.toUpperCase()}</Text>
            <View style={styles.stars}>
              <Rating rating={rating}/>
            </View>
            <Text style={styles.info}>{address}</Text>
            <Text style={styles.info}>{suburb} {state} {postcode}</Text>
            <Text style={styles.info}>{phone}</Text>
        </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 200,
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
    fontSize: 12
  },
  stars: {
    paddingBottom: 10,
  }
});
