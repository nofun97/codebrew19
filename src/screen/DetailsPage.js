import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogIn: true,
      email: "",
      password: "",
      username: "",
    };
  }

  render() {
    const dimensions = Dimensions.get("window");
    const imageHeight = Math.round(dimensions.width * 0.739);
    const imageWidth = dimensions.width;

    return (
      <View style={styles.container}>
        <Image
          style={{ width: imageWidth, height: imageHeight }}
          source={{
            uri:
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
