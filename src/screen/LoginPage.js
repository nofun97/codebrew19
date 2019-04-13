import React, { Component } from "react";
import { Alert, StyleSheet, Text, View, Icon } from "react-native";
import { Button } from "react-native-paper";

export default class LoginPage extends Component {
  static navigationOption = {
    tabBarVisible: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      showLogIn: true,
    };
  }

  handlePress() {
    this.setState(previousState => (
      { showLogIn: !previousState.showLogIn }
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Paragraph</Text>
        <View style={styles.option}>
          <Button
            mode="text"
            disabled={this.state.showLogIn}
            onPress={this.handlePress.bind(this)}
            color="black"
          >
            {" "}
            LOGIN{" "}
          </Button>
          <Button
            mode="text"
            disabled={!this.state.showLogIn}
            onPress= {this.handlePress.bind(this)}
            color="black"
          >
            {" "}
            SIGN IN{" "}
          </Button>
        </View>
        {/* form component */}
        <Button
          icon="add-a-photo"
          onPress={() => this.props.navigation.push("MainPage")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  appName: {
    fontFamily: "Open Sans",
    fontSize: 60,
    color: "black",
    fontWeight: "bold",
  },
  option: {
    flexDirection: "row",
    paddingTop: 25,
  },
});
