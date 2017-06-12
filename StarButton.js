import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableHighlight  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default class StarButton extends Component {


  handlePress(number){
    this.props.onGiveRating(number)
  }

  render(){
    return (
      <TouchableHighlight
      onPress={() => {this.handlePress(this.props.rating)}}
      underlayColor="#FFF">
          <FontAwesome
          style={{paddingLeft:10}}
          name="star"
          size={35}
          color={this.props.ratingColor} />
      </TouchableHighlight>
    )
  }
}
