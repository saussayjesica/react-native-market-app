import React, { Component } from 'react';
import { MapView } from 'expo';
import { FontAwesome } from '@expo/vector-icons';

const DELTA = 0.00922

export default class MarketLocation extends Component {
  render() {
    const { latitude, longitude } = this.props.data

    const DELTA = 0.00922 * 0.25

    return (
      <MapView
        ref={(ref) => { this.mapRef = ref }}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: latitude - (0.00922*0.25),
          longitude: longitude,
          latitudeDelta:  0.00922*1,
          longitudeDelta: 0.00421*1
        }}>
        <MapView.Marker
          coordinate={{
          latitude: latitude,
          longitude: longitude
          }}
          image={require('./assets/images/map-pin.png')}
        />
    </MapView>
    );
  }
}
