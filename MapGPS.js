import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { markets } from './config/data';

const marketArray = [];

export default class MapGPS extends Component {
  state = {
      mapRegion: null,
      lastLat: null,
      lastLong: null,
    }



      createMarkers() {
        markets.map((market) => {
            marketArray.push({latitude: market.latitude, longitude: market.longitude})
      })
    }




  // fitAllMarkers() {
  //   this.map.fitToCoordinates(marketArray, {
  //     //edgePadding: DEFAULT_PADDING,
  //     animated: true,
  //   });
  // }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set use the the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onMapPress(e) {
    //console.log(e.nativeEvent.coordinate.longitude);
    let region = {
      latitude:       e.nativeEvent.coordinate.latitude,
      longitude:      e.nativeEvent.coordinate.longitude,
      latitudeDelta:  0.00922*1.5,
      longitudeDelta: 0.00421*1.5
    }
    this.onRegionChange(region, region.latitude, region.longitude);
  }




  render() {
    console.log(marketArray[0])
    const marketLatLng = marketArray
    return (
      <View style={{flex: 1}}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChange={this.onRegionChange.bind(this)}
          onPress={this.onMapPress.bind(this)}>
          {markets.map((market) => (
          <MapView.Marker
            key={market.name}
            coordinate={{
            latitude: market.latitude,
            longitude: market.longitude
            }}
            //ref={ref => { this.marker1 = ref; }}
            title={market.name.toUpperCase()}
            description={`${market.address} ${market.suburb}`}
            image={require('./assets/images/map-pin.png')}
          />
          ))}
        </MapView>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
