import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import FavouriteButton from './FavouriteButton'
import Rating from './Rating'
import GiveRating from './GiveRating'




export default class RateMarket extends React.Component {
render() {
  const rating = 5

    return (
      <View style={styles.container}>
        <Text style={styles.title}>GIVE A RATING</Text>
        <View style={styles.stars}>
          <GiveRating />
        </View>
        <Text style={styles.favouritesTitle}>ADD TO FAVOURITES</Text>
        <FavouriteButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  favouritesTitle: {
    letterSpacing: 3,
    fontWeight: '600',
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
    paddingTop: 10
  },
  stars: {
    paddingBottom: 10
  },
});
