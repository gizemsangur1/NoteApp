import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";
import DetailsScreen from "./src/DetailsScreen";
import Welcome from "./src/Welcome"
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoteScreen from "./src/NoteScreen";
import Note from "./src/Note";
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NoteScreen">
         <Stack.Screen name="Welcome" component={Welcome} />
         <Stack.Screen name="Note" component={Note} />
        <Stack.Screen name="NoteScreen" component={NoteScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
