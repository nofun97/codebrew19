import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLogIn : true,
    }
  }

  render() {
    return (
      <View style ={styles.container}>
        <Text> App Name </Text>
        {/* put jansen choice components here */}
        {/* form component */}
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
