import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoteScreen from "./NoteScreen";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { ListItem } from "@rneui/base";
export default function DetailsScreen({ navigation }) {
  const [notes, setNotes] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getNotes();
    }, [])
  );

  const getNotes = () => {
    AsyncStorage.getItem("NOTES").then((notes) => {
      setNotes(JSON.parse(notes));
    });
  };
  const renderItem = ({ item, index }) => (
    <View style={styles.noteItem}>
      <ListItem
        onPress={() => {
          navigation.navigate("Note", { singleNote: item });
        }}
      >
        <Text>{item.title}</Text>
        <Text>{item.content}</Text>
      </ListItem>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
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
  Button: {
    borderRadius: 5,
    backgroundColor: "pink",
  },
});
