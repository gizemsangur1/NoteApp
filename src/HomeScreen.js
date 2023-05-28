import * as React from "react";
import { StyleSheet, Button, View, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function HomeScreen({ navigation }) {
  return (
    <View container style={{width:"100%",height:"100%"}}>
      <View
        
        style={{
          flex: 3,
          width:"100%",
          height:100,
          backgroundColor: "blue",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "purple",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "pink",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "purple",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "pink",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "purple",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "pink",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "purple",
          }}
        />
      </View>
      <View
        container
        style={{
          flex: 3,
          width: "100%",
          height: 100,
          backgroundColor: "blue",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "purple",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "pink",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "purple",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "pink",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "purple",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "pink",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "purple",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
