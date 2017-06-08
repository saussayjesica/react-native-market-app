import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import MapGPS from '../MapGPS'
import Markets from '../Markets'
import MarketInfo from '../MarketInfo'
import RateMarket from '../RateMarket'
import MarketCarousel from '../MarketCarousel'

export const MapStack = StackNavigator({
  Markets: {
    screen: Markets,
    navigationOptions: {
      title: 'Farmer\'s Markets',
      headerStyle:{ backgroundColor: '#FFF'},
    }
  },
  MarketCarousel: {
    screen: MarketCarousel,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()}`,
    }),
  }
})

export const Tabs = TabNavigator({
  MarketInfo: {
    screen: MapStack,
    tabBarOptions: {
      tintColor: '#FFF',
    },
    navigationOptions: {
      tabBarLabel: 'Markets',
      tabBarIcon: ({ tintColor }) => <Entypo name="shop" size={24} color={tintColor} />,

    }
  },
  MapGPS: {
    screen: MapGPS,
    navigationOptions: {
        tabBarLabel: 'Nearby',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-map-outline" size={24} color={tintColor} />
    }
  },
  RateMarket: {
    screen: RateMarket,
    navigationOptions: {
      tabBarLabel: 'Favourites',
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-star" size={26} color={tintColor} />
    }
  },
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 10,
    },
    tabStyle: {
      width: 100,
    },
    style: {
      backgroundColor: '#FFF',
    },
    activeTintColor: '#FF0C38'
  }
})
