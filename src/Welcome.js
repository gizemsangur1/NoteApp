import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoteScreen from "./NoteScreen";
export default function DetailsScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Please enter your name to continue</Text>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    padding: 4,
  },
  TextInput: {
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 2,
    width: "70%",
    height: "6%",
    padding: 5,
  },
  Button:{
    borderRadius:5,
    backgroundColor:"pink",

  },
});
