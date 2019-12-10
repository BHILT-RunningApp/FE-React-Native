import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import EndPointMap from "./endpointmap";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: {},
      username: "",
      location: "",
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0121,
      latitude: 0,
      longitude: 0
    };
  }

  componentDidMount() {
    return fetch("https://project-bhilt.appspot.com/api/users")
      .then(response => response.json())
      .then(responseJson => {
        const singleUser = responseJson.users.filter(user => {
          return user.username == "ben";
        });
        const location = singleUser[0].current_location.split(", ");
        const latitude = Number(location[0]);
        const longitude = Number(location[1]);
        this.setState({
          isLoading: false,
          user: singleUser,
          username: singleUser[0].username,
          location: singleUser[0].current_location,
          latitude: latitude,
          longitude: longitude
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Text style={styles.loading}>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            padding: 40
          }}
        >
          <View style={styles.header}>
            <Text style={styles.boldText}> Saviar</Text>
          </View>
          <View style={styles.welcome}>
            <Text style={styles.welcomeText}>
              Welcome to Saviar {this.state.username.toUpperCase()},{"\n"} a
              clean route through impure air!{"\n"}
              You have set Your start point to "Manchester Federation house".
              Please, select on te below map were you would like to go
            </Text>
          </View>
          <View style={styles.endpoint}>
            <EndPointMap
              latitudeDelta={this.state.latitudeDelta}
              longitudeDelta={this.state.longitudeDelta}
              latitude={this.state.latitude}
              longitude={this.state.longitude}
            />
          </View>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  // header: {
  //   fontWeight: "bold",
  //   color: "#000"
  // },
  boldText: {
    paddingTop: 40,
    paddingBottom: 20,
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    color: "#24416b"
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    padding: 100,
    fontSize: 40,
    fontWeight: "bold"
  },
  welcomeText: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
    paddingLeft: 40,
    color: "#24354f"
  }
});
