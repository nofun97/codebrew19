import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Chip, Avatar } from "react-native-paper";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dietColor: "#2778ef",
      allergenColor: "#fc5372",
      showLogIn: true,
      // criteria for the selected chips
      vegan: true,
      vegetarian: false,
      pesc: false,
      noBeef: false,
      halal: false,
      gf: false,
      nonDairy: false,
      eggs: false,
      dairy: false,
      seafood: true,
      wheat: false,
      soy: false,
      nuts: false,
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.profile}>
          <Text style={styles.myProfile}>My Profile</Text>
          <Avatar.Image size={100} style={{ marginTop: 30 }} />
        </View>
        <View style={styles.biography}>
          <Text style={styles.stringProfiles}>User Name</Text>
          <Text style={styles.filledItems}>username here</Text>
          <Text style={styles.stringProfiles}>Email</Text>
          <Text style={styles.filledItems}>put email here</Text>
        </View>
        <View style={styles.containChips}>
          <Text style={styles.stringProfiles}>Diet</Text>
          <View style={styles.chipsDiet}>
            <Chip
              style={styles.chips}
              selectedColor={this.state.dietColor}
              selected={this.state.vegan}
              onPress={() => {
                this.setState(prevState => ({
                  vegan: !prevState.vegan,
                }));
              }}
            >
              Vegan
            </Chip>
            <Chip
              style={styles.chips}
              selectedColor={this.state.dietColor}
              selected={this.state.vegetarian}
              onPress={() => {
                this.setState(prevState => ({
                  vegetarian: !prevState.vegetarian,
                }));
              }}
            >
              Vegetarian
            </Chip>
            <Chip
              style={styles.chips}
              selectedColor={this.state.dietColor}
              selected={this.state.pesc}
              onPress={() => {
                this.setState(prevState => ({
                  pesc: !prevState.pesc,
                }));
              }}
            >
              Pesc
            </Chip>
            <Chip
              style={styles.chips}
              selectedColor={this.state.dietColor}
              selected={this.state.noBeef}
              onPress={() => {
                this.setState(prevState => ({
                  noBeef: !prevState.noBeef,
                }));
              }}
            >
              No Beef
            </Chip>
            <Chip
              style={styles.chips}
              selectedColor={this.state.dietColor}
              selected={this.state.halal}
              onPress={() => {
                this.setState(prevState => ({
                  halal: !prevState.halal,
                }));
              }}
            >
              Halal
            </Chip>
            <Chip
              style={styles.chips}
              selectedColor={this.state.dietColor}
              selected={this.state.gf}
              onPress={() => {
                this.setState(prevState => ({
                  gf: !prevState.gf,
                }));
              }}
            >
              GF
            </Chip>
            <Chip
              style={styles.chips}
              selectedColor={this.state.dietColor}
              selected={this.state.nonDairy}
              onPress={() => {
                this.setState(prevState => ({
                  nonDairy: !prevState.nonDairy,
                }));
              }}
            >
              Non-Diary
            </Chip>
          </View>
        </View>
        <View style={styles.containChips}>
          <Text style={styles.stringProfiles}>Allergens</Text>
          <View style={styles.chipsAllergens}>
            <Chip
              style={styles.chips}
              selectedColor={this.state.allergenColor}
              selected={this.state.eggs}
              onPress={() => {
                this.setState(prevState => ({
                  eggs: !prevState.eggs,
                }));
              }}
            >
              Eggs
            </Chip>
            <Chip
              style={styles.chips}
              selectedColor={this.state.allergenColor}
              selected={this.state.dairy}
              onPress={() => {
                this.setState(prevState => ({
                  dairy: !prevState.dairy,
                }));
              }}
            >
              Dairy
            </Chip>
            <Chip
              style={styles.chips}
              selectedColor={this.state.allergenColor}
              selected={this.state.seafood}
              onPress={() => {
                this.setState(prevState => ({
                  seafood: !prevState.seafood,
                }));
              }}
            >
              Seafood
            </Chip>
            <Chip
              style={styles.chips}
              selectedColor={this.state.allergenColor}
              selected={this.state.wheat}
              onPress={() => {
                this.setState(prevState => ({
                  wheat: !prevState.wheat,
                }));
              }}
            >
              Wheat
            </Chip>
            <Chip
              style={styles.chips}
              selectedColor={this.state.allergenColor}
              selected={this.state.soy}
              onPress={() => {
                this.setState(prevState => ({
                  soy: !prevState.soy,
                }));
              }}
            >
              Soy
            </Chip>
            <Chip
              style={styles.chips}
              selectedColor={this.state.allergenColor}
              selected={this.state.nuts}
              onPress={() => {
                this.setState(prevState => ({
                  nuts: !prevState.nuts,
                }));
              }}
            >
              Nuts
            </Chip>
          </View>
        </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  myProfile: {
    fontSize: 40,
    paddingTop: 15,
    textAlign: "center",
  },
  stringProfiles: {
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 5,
    alignSelf: "flex-start",
    flexDirection: "column",
  },
  filledItems: {
    fontSize: 14,
    fontStyle: "italic",
    paddingLeft: 10,
    paddingBottom: 10,
  },
  chipsDiet: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    paddingLeft: 10,
  },
  chipsAllergens: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    paddingLeft: 10,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  profile: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  biography: {
    flex: 1,
    alignSelf: "flex-start",
  },
  chips: {
    marginBottom: 9,
    marginRight: 7,
  },
  containChips: {
    flex: 1,
  },
});
