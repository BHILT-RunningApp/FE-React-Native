import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import MapView from "react-native-maps";

export default class EndPointMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0121,
      endLatitude: 0,
      endLongitude: 0
    };
  }

  handlePress = evt => {
    const endlat = evt.nativeEvent.locationX;
    const endlong = evt.nativeEvent.locationY;
    console.log(evt);
    this.setState({ endLatitude: endlat, endLongitude: endlong });
  };
  render() {
    const { longitudeDelta, latitudeDelta, latitude, longitude } = this.props;
    const { endLatitude, endLongitude } = this.state;
    return (
      <View style={{ flex: 3, alignItems: "center", padding: 20 }}>
        <View style={styles.endpoint}>
          <Text> Set final route point: </Text>
        </View>
        <View>
          <TouchableOpacity onPress={evt => this.handlePress(evt)}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta
              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: latitude,
                  longitude: longitude
                }}
              >
                <View style={styles.radius}>
                  <View style={styles.marker} />
                </View>
              </MapView.Marker>
              <MapView.Marker
                coordinate={{
                  latitude: endLatitude,
                  longitude: endLongitude
                }}
              />
            </MapView>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  endpoint: {
    alignItems: "center",
    fontWeight: "bold",
    justifyContent: "center",
    paddingBottom: 40
  },
  map: {
    // position: "absolute",
    width: 300,
    height: 300
  },
  radius: {
    height: 40,
    width: 40,
    borderRadius: 50 / 2,
    overflow: "hidden",
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(0, 112, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    height: 10,
    width: 10,
    borderRadius: 3,
    borderColor: "white",
    borderRadius: 20 / 2,
    overflow: "hidden",
    backgroundColor: "#007AFF"
  }
});
