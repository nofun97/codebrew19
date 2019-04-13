import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default class LoginPage extends Component {
  static navigationOption = {
    tabBarVisible: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      showLogIn: true,
      email: "",
      password: "",
      username: "",
    };
  }

  handleSubmit() {
    // submit the state here
    if(this.state.showLogIn){

    } else {

    }

    this.props.navigation.navigate("MainPage");
  }

  render() {
    const logInForm = (
      <View style={styles.forms}>
        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={text => this.setState({ text })}
          mode="outlined"
          style={styles.textInput}
        />
        <TextInput
          label="Password"
          value={this.state.password}
          onChangeText={text => this.setState({ text })}
          mode="outlined"
          style={styles.textInput}
        />
        <Button
          mode="contained"
          style={styles.submitButton}
          color="blue"
          onPress={this.handleSubmit.bind(this)}
        >
          Log in
        </Button>
      </View>
    );

    const signUpForm = (
      <View style={styles.forms}>
        <TextInput
          label="Username"
          value={this.state.username}
          onChangeText={text => this.setState({ text })}
          mode="outlined"
          style={styles.textInput}
        />
        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={text => this.setState({ text })}
          mode="outlined"
          style={styles.textInput}
        />
        <TextInput
          label="Password"
          value={this.state.password}
          onChangeText={text => this.setState({ text })}
          mode="outlined"
          style={styles.textInput}
        />
        <Button
          mode="contained"
          style={styles.submitButton}
          color="blue"
          onPress={this.handleSubmit.bind(this)}
        >
          Sign up
        </Button>
      </View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Paragraph</Text>
        <View style={styles.option}>
          <Button
            mode="text"
            onPress={() =>
              this.setState({
                showLogIn: true,
              })
            }
            color={this.state.showLogIn ? "black" : "lightgrey"}
          >
            {" "}
            LOG IN{" "}
          </Button>
          <Button
            mode="text"
            onPress={() =>
              this.setState({
                showLogIn: false,
              })
            }
            color={!this.state.showLogIn ? "black" : "lightgrey"}
          >
            {" "}
            SIGN UP{" "}
          </Button>
        </View>
        {this.state.showLogIn ? logInForm : signUpForm}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
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
    paddingTop: 40,
  },
  forms: {
    paddingTop: 40,
    flexDirection: "column",
    paddingRight: 15,
    paddingLeft: 15,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  textInput: {
    marginBottom: 20,
  },
});
