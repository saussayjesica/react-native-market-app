import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { MapView } from 'expo';

import MarketHours from './MarketHours'
import MarketInfo from './MarketInfo'
import MarketLocation from './MarketLocation'
import MarketRateAndFav from './MarketRateAndFav'

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth - 10;
const itemHeight = 200;


export default class MarketCarousel extends Component{


  render(){
    const id = this.props.navigation.state.params.id;
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    const { name, address, suburb, state, postcode, rating, totalRatings, latitude, longitude, phone, website, hours, other } = this.props.navigation.state.params;
    return (
      <View style={{ flex:1 }}>
        <MarketLocation
          style={{ flex:1 }}
          data={this.props.navigation.state.params}
        />
        <Carousel
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          firstItem={1}
          containerCustomStyle={{position:'absolute', bottom: 10}}
        >
          <View style={styles.slide}>
            <MarketHours
            data={this.props.navigation.state.params}/>
          </View>
          <View style={styles.slide}>
            <MarketInfo
            data={this.props.navigation.state.params}/>
          </View>
          <View style={styles.slide}>
            <MarketRateAndFav
            data={this.props.navigation.state.params}
            marketId={id}
            rating={rating}/>
          </View>
        </Carousel>
      </View>
      )
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
    info: {
      color: '#4A4A4A',
      fontSize: 12
    },
    stars: {
      paddingBottom: 10,
    },
    slide: {
        width: itemWidth,
        height: itemHeight,
    }
  });
