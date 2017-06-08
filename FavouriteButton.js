import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

export default class FavouriteButton extends Component {
  constructor(){
    super()
    this.state = {
      favourite: false,
      uri: require('./assets/images/favorite-grey.png'),
    }
  }

  handlePress = () => {
    if(!this.state.favourite) {
      this.setState({
        uri: require('./assets/images/favorite-red.png'),
        favourite: true,
      })
    } else if (this.state.favourite) {
      this.setState({
        uri: require('./assets/images/favorite-grey.png'),
        favourite: false,
      })
    }
  }

  render() {
    return(
      <TouchableHighlight
        onPress={() => {this.handlePress()}}
        underlayColor="#FFF">
          <Image
            style={styles.heart}
            source={this.state.uri} />
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  heart: {
    marginTop: 10,
    height: 38,
    width: 40
  }
})
