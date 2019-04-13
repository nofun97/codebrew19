import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Rating, Icon } from "react-native-elements";

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
      <ScrollView>
        <Image
          style={{ width: imageWidth, height: imageHeight }}
          source={{
            uri:
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
          }}
        />
      <View style={{marginLeft: 10}}>
        <Text style={styles.foodName}>Avacado Roll</Text>
        <View style={styles.ratings}>
        <Rating
                  imageSize={20}
                  readonly
                  startingValue={this.props.rating}
                  style={{ paddingVertical: 10 }}
                />
        <Text style={styles.randomText}>  4.6/5</Text>
        </View>
        <Text style= {styles.randomText}>$</Text>
        <Text style= {styles.distance}>1.5 km</Text>
        <Text style= {styles.randomText}>Tokui Sushi</Text>
        <View style={{flexDirection: "row"}}>
          <Icon name= "location-on"/>
          <Text style={styles.button}> 300 Lonsdale St, Melbourne, 3000, VIC </Text>
        </View>
        <Text style={styles.randomText}>Reviews</Text>
      </View>
      </ScrollView>
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
  foodName: {
    fontWeight: "bold",
    fontSize: 24,
  },
  randomText: {
    fontWeight: "bold",
    fontSize: 19
  },
  distance:{
    fontSize: 17
  },
  button: {
    fontSize: 13
  },
  ratings: {
    flexDirection: "row",
    alignItems: "center"
  }
});
