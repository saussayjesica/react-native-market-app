import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import FavouriteButton from './FavouriteButton'
import StarButton from './StarButton'
import db from './lib/database'

const UserData = db.ref('UserData')

export default class MarketRateAndFav extends Component {

  handleGivenRating = (number) => {
    if(number == 1){
      return (
        (UserData.child(this.props.marketId).child('starColor').child('one')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('two')
        .transaction(color => color = '#E2E2E2')),
        (UserData.child(this.props.marketId).child('starColor').child('three')
        .transaction(color => color = '#E2E2E2')),
        (UserData.child(this.props.marketId).child('starColor').child('four')
        .transaction(color => color = '#E2E2E2')),
        (UserData.child(this.props.marketId).child('starColor').child('five')
        .transaction(color => color = '#E2E2E2')),
        (UserData.child(this.props.marketId).child('rating')
        .transaction(rating => rating = number)),
        (UserData.child(this.props.marketId).child('totalRatings')
        .transaction(totalRatings => totalRatings + number))
      )
    }
    if(number == 2){
      return (
        (UserData.child(this.props.marketId).child('starColor').child('one')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('two')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('three')
        .transaction(color => color = '#E2E2E2')),
        (UserData.child(this.props.marketId).child('starColor').child('four')
        .transaction(color => color = '#E2E2E2')),
        (UserData.child(this.props.marketId).child('starColor').child('five')
        .transaction(color => color = '#E2E2E2')),
        (UserData.child(this.props.marketId).child('rating')
        .transaction(rating => rating = number)),
        (UserData.child(this.props.marketId).child('totalRatings')
        .transaction(totalRatings => totalRatings + number))
      )
    }
    if(number == 3){
      return (
        (UserData.child(this.props.marketId).child('starColor').child('one')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('two')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('three')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('four')
        .transaction(color => color = '#E2E2E2')),
        (UserData.child(this.props.marketId).child('starColor').child('five')
        .transaction(color => color = '#E2E2E2')),
        (UserData.child(this.props.marketId).child('rating')
        .transaction(rating => rating = number)),
        (UserData.child(this.props.marketId).child('totalRatings')
        .transaction(totalRatings => totalRatings + number))
      )
    }
    if(number == 4){
      return (
        (UserData.child(this.props.marketId).child('starColor').child('one')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('two')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('three')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('four')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('five')
        .transaction(color => color = '#E2E2E2')),
        (UserData.child(this.props.marketId).child('rating')
        .transaction(rating => rating = number)),
        (UserData.child(this.props.marketId).child('totalRatings')
        .transaction(totalRatings => totalRatings + number))
      )
    }
    if(number == 5){
      return (
        (UserData.child(this.props.marketId).child('starColor').child('one')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('two')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('three')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('four')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('starColor').child('five')
        .transaction(color => color = '#573AE8')),
        (UserData.child(this.props.marketId).child('rating')
        .transaction(rating => rating = number)),
        (UserData.child(this.props.marketId).child('totalRatings')
        .transaction(totalRatings => totalRatings + number))
      )
    }
  }

render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GIVE A RATING</Text>
        <View style={styles.stars}>
          <StarButton
            ratingColor={this.props.data.starColor.one.replace(/'/g, "")}
            rating={1}
          />
          <StarButton
            onGiveRating={this.handleGivenRating}
            ratingColor={this.props.data.starColor.two.replace(/'/g, "")}
            rating={2}
          />
          <StarButton
            onGiveRating={this.handleGivenRating}
            ratingColor={this.props.data.starColor.three.replace(/'/g, "")}
            rating={3}
          />
          <StarButton
            onGiveRating={this.handleGivenRating}
            ratingColor={this.props.data.starColor.four.replace(/'/g, "")}
            rating={4}
          />
          <StarButton
            onGiveRating={this.handleGivenRating}
            ratingColor={this.props.data.starColor.five.replace(/'/g, "")}
            rating={5}
          />
        </View>
        <Text style={styles.favouritesTitle}>ADD TO FAVOURITES</Text>
        <FavouriteButton
          status={this.props.data.favourite}
          marketId={this.props.marketId}
        />
      </View>
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
    paddingTop: 10,
    flexDirection: 'row',
    paddingBottom: 10
  },
});
