import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { color } from "@rneui/base";
import { useState } from "react";

export default function DetailsScreen({ navigation }) {
  const [name, setName] = useState();
  const handleText = text =>  setName(text);
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Please enter your name to continue</Text>
      <TextInput
        value={name}
        onChangeText={handleText}
        defaultValue="Enter your name"
        style={styles.TextInput}
      ></TextInput>
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
});
