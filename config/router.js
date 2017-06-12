import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import MapGPS from '../MapGPS'
import Markets from '../Markets'
import Favourites from '../Favourites'
import MarketRateAndFav from '../MarketRateAndFav'
import MarketCarousel from '../MarketCarousel'

export const MarketStack = StackNavigator({
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

export const FavouriteStack = StackNavigator({
  Favourites: {
    screen: Favourites,
    navigationOptions: {
      title: 'Favourites',
      headerStyle:{ backgroundColor: '#FFF'},
    }
  },
  FavMarketCarousel: {
    screen: MarketCarousel,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()}`,
    }),
  }
})

export const Tabs = TabNavigator({
  MarketInfo: {
    screen: MarketStack,
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
  Favourites: {
    screen: FavouriteStack,
    tabBarOptions: {
      tintColor: '#FFF',
    },
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
