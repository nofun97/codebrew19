import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Auth from "@aws-amplify/auth";
import Analytics from "@aws-amplify/analytics";
import awsconfig from "./aws-exports";
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import LoginPage from './screen/LoginPage'

// retrieve temporary AWS credentials and sign requests
Auth.configure(awsconfig);
// send analytics events to Amazon Pinpoint
Analytics.configure(awsconfig);

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnalyticsClick = this.handleAnalyticsClick.bind(this);
    this.state = { resultHtml: <Text />, eventsSent: 0 };
  }

  handleAnalyticsClick() {
    Analytics.record("AWS Amplify Tutorial Event").then(evt => {
      const url =
        "https://" +
        awsconfig.aws_project_region +
        ".console.aws.amazon.com/pinpoint/home/?region=" +
        awsconfig.aws_project_region +
        "#/apps/" +
        awsconfig.aws_mobile_analytics_app_id +
        "/analytics/events";
      let result = (
        <View>
          <Text>Event Submitted.</Text>
          <Text>Events sent: {++this.state.eventsSent}</Text>
          <Text style={styles.link} onPress={() => Linking.openURL(url)}>
            View Events on the Amazon Pinpoint Console
          </Text>
        </View>
      );
      this.setState({
        resultHtml: result,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to your React Native App with Amplify!</Text>
        <Button icon="add-a-photo" onPress={this.handleAnalyticsClick}>
          press me to see the stat
        </Button>
        {this.state.resultHtml}
      </View>
    );
  }
}

const HomeNavigation = createMaterialBottomTabNavigator({
  LoginPage: LoginPage,
  HomeScreen: HomeScreen,
},{shifting: true});

const AppNavigation = createStackNavigator({
  LoginPage: LoginPage,
  MainPage: HomeNavigation,
},{headerMode: "none"})

export default createAppContainer(AppNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
});
