import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Chip, Avatar } from 'react-native-paper';


export default class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
          showLogIn : true,
        }
      }

      render(){
          return(
          <View style= {styles.container}>
            <View style= {styles.profile}>
              <Text style= {styles.myProfile}>My Profile</Text>
              <Avatar.Image size={100} style= {{marginTop: 30}}/>
            </View>
            <View style={styles.biography}>
              <Text style= {styles.stringProfiles}>User Name</Text>
              <Text style= {styles.filledItems}>username here</Text>
              <Text style= {styles.stringProfiles}>Email</Text>
              <Text style= {styles.filledItems}>put email here</Text>
            </View>
            <View style={styles.containChips}>
            <Text style= {styles.stringProfiles}>Diet</Text>
            <View style= {styles.chipsDiet}>
                <Chip style={styles.chips} onPress={() => {}}>Vegan</Chip>
                <Chip style={styles.chips} onPress={() => {}}>Vegatarian</Chip>
                <Chip style={styles.chips} onPress={() => {}}>Pesc</Chip>
                <Chip style={styles.chips} onPress={() => {}}>No Beef</Chip>
                <Chip style={styles.chips} onPress={() => {}}>Halal</Chip>
                <Chip style={styles.chips} onPress={() => {}}>GF</Chip>
                <Chip style={styles.chips} onPress={() => {}}>Non-Diary</Chip>
            </View>
            </View>
            <View style={styles.containChips}>
            <Text style= {styles.stringProfiles}>Allergens</Text>
            <View style= {styles.chipsAllergens}>
              <Chip style={styles.chips} onPress={() => {}}>Eggs</Chip>
              <Chip style={styles.chips} onPress={() => {}}>Dairy</Chip>
              <Chip style={styles.chips} onPress={() => {}}>Seafood</Chip>
              <Chip style={styles.chips} onPress={() => {}}>Wheat</Chip>
              <Chip style={styles.chips} onPress={() => {}}>Soy</Chip>
              <Chip style={styles.chips} onPress={() => {}}>Nuts</Chip>
            </View>
            </View>
          </View>
          );
      }
}

var styles = StyleSheet.create({
    myProfile:{
        fontSize: 40,
        paddingTop: 15,
        textAlign: 'center',
    },
    stringProfiles: {
        fontSize: 20,
        paddingLeft: 10,
        paddingBottom: 5,
        alignSelf: "flex-start",
        flexDirection: "column"
    },
    filledItems:{
        fontSize: 14,
        fontStyle: "italic",
        paddingLeft: 10,
        paddingBottom: 10
    },
    chipsDiet: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        paddingLeft: 10
    },
    chipsAllergens: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        paddingLeft: 10
    },
    container: {
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    profile: {
        flex:2,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    biography: {
        flex:1,
        alignSelf: 'flex-start',
    },
    chips: {
        marginBottom: 9
    },
    containChips: {
        flex: 1
    }
});