import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { markets } from './config/data';

export default class Market extends Component {
  
  onLearnMore = (market) => {
    this.props.navigation.navigate('MarketCarousel', { ...market });
  };

  render() {
    return (
      <ScrollView>
        <List style={styles.list}>
          {markets.map((market) => (
            <ListItem
              key={market.name}
              roundAvatar
              avatar={{ uri: market.thumbnail }}
              title={`${market.name.toUpperCase()}`}
              subtitle={market.suburb}
              onPress={() => this.onLearnMore(market)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
      marginTop: 0,
      backgroundColor: '#FFF'
  }
})
