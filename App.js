import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground
} from "react-native";
import Homepage from "./components/homepage";

export default function App() {
  const [startpoint, setStartPoint] = useState("coordinates here");
  const [endpoint, setEndPoint] = useState("");
  const [user, setUser] = useState("");

  return (
    <ImageBackground
      source={require("./pics/running.jpeg")}
      style={styles.imgBackground}
      resizeMode="cover"
      imageStyle={{ opacity: 0.2 }}
    >
      <View style={styles.container}>
        <Homepage
          startpoint={startpoint}
          setStartPoint={setStartPoint}
          endpoint={endpoint}
          setEndPoint={setEndPoint}
          user={user}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "transparent",
    paddingTop: 80,
    // alignItems: "center",
    justifyContent: "center"
    // backgroundColor: "rgba(400,0,0,0.5)"
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    position: "relative"
    // opacity: 0.9
  }
});
