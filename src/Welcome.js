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
export default function Welcome({ navigation }) {
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
    <View style={styles.item}>
      <ListItem
      style={{backgroundColor:"pink"}}
        onPress={() => {
          navigation.navigate("Note", { singleNote: item });
        }}
      >
        <Text  style={{backgroundColor:"pink"}}>{item.header}</Text>
      </ListItem>
    </View>
  );
  const gotoCreate = () => {
    navigation.navigate("NoteScreen");
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View>
        <Button title="Create" onPress={gotoCreate}></Button>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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

  item: {
    borderRadius: 5,
    height: 150,
    backgroundColor: "#f9c2ff",
    alignItems:"center",
    justifyContent:"center",
    flex: 3,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
