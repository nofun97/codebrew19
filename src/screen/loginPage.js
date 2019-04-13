import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

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
        <Button mode="text" disabled={this.state.showLogIn? true : false} onPress= {() => {}} color= 'black' > LOGIN </Button>
        <Button mode ="text" disabled={this.state.showLogIn? false : true} onPress= {() => {}} color= 'black'>SIGN IN</Button>
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
