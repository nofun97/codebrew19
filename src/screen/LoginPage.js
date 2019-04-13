import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Button, TextInput } from "react-native-paper";
import logo from '../../assets/pics/logo_silver_psoo.png';
import second from '../../assets/pics/second.png';

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

    const dimensions = Dimensions.get('window');

    const logInForm = (
      <View style={styles.forms}>
        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          mode="outlined"
          style={styles.textInput}
        />
        <TextInput
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
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
        <Image style={{height:dimensions.width * 0.62, width: dimensions.width,}} source= {second} />        
      </View>
    );

    const signUpForm = (
      <View style={styles.forms}>
        <TextInput
          label="Username"
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          mode="outlined"
          style={styles.textInput}
        />
        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          mode="outlined"
          style={styles.textInput}
        />
        <TextInput
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
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
        <Text style={styles.appName}>Silver Spoon</Text>
        <Image style={{height: dimensions.width * 0.2, width: dimensions.width * 0.6, alignSelf:"flex-end"}} source= {logo} />
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
    fontFamily: "HelveticaNeue",
    fontSize: 40,
    color: "black",
    zIndex: 1,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: "row",
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
