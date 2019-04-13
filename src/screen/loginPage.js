import React, { Component } from "react";
import { StyleSheet, Text, View, Icon } from "react-native";
import { Button } from 'react-native-paper';

export default class LoginPage extends Component {
  static navigationOption = {
    tabBarVisible : false,
  }

  constructor(props){
    super(props);
    this.state = {
      showLogIn : true,
    }
  }

  authorize(){
    this.props.navigation.navigate("MainPage");
  }

  render() {
    return (
      <View style ={styles.container}>
        <Text style = {styles.appName}>Paragraph</Text>
        <View style= {styles.option}>
          <Button mode="text" disabled={this.state.showLogIn? true : false} onPress= {() => {}} color= 'black'> LOGIN </Button>
          <Button mode="text" disabled={this.state.showLogIn? false : true} onPress= {() => {}} color= 'black'> SIGN IN </Button>
        </View>
        {/* form component */}
        <Button icon="add-a-photo" onPress={() => this.props.navigation.push("MainPage")}></Button>
      </View>
    )
  };
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  appName: {
    fontFamily: 'Open Sans',
    fontSize: 60,
    color: 'black',
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    paddingTop: 25
  }
});
