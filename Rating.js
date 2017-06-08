import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Rating extends Component {

  render(){
    return(
      <View style={styles.star}>
        <Text style={styles.ratingNumber}>{this.props.rating}.0</Text>
        <FontAwesome style={{paddingLeft:10}} name="star" size={20} color={this.props.rating >= 1 ? '#573AE8' : '#E2E2E2'} />
        <FontAwesome style={{paddingLeft:5}} name="star" size={20} color={this.props.rating >= 2 ? '#573AE8' : '#E2E2E2'} />
        <FontAwesome style={{paddingLeft:5}} name="star" size={20} color={this.props.rating >= 3 ? '#573AE8' : '#E2E2E2'} />
        <FontAwesome style={{paddingLeft:5}} name="star" size={20} color={this.props.rating >= 4 ? '#573AE8' : '#E2E2E2'} />
        <FontAwesome style={{paddingLeft:5}} name="star" size={20} color={this.props.rating >= 5 ? '#573AE8' : '#E2E2E2'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  star: {
    paddingTop: 10,
    flexDirection: 'row', 
  },
  ratingNumber: {
    fontSize: 18,
    lineHeight: 23.5,
    color: '#573AE8',
  }
})
