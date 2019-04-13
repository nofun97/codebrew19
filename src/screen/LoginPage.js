import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-paper';

export default class LoginPage extends Component {
  static navigationOption = {
    tabBarVisible : false
  }

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
        <Button icon="add-a-photo" onPress={() => this.props.navigation.navigate("MainPage")}></Button>
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
