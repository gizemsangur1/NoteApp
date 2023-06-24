import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button, Surface } from "react-native-paper";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

const Note = ({ route }) => {
  const [notes, setNotes] = useState([]);
  const navigation = useNavigation();
  const { singleNote } = route.params;
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

  const deleteNote = async () => {
    const newNotes = notes.filter((note) => note.id !== singleNote.id);
    await AsyncStorage.setItem("NOTES", JSON.stringify(newNotes)).then(() => {
      setNotes(newNotes);
      navigation.navigate("Welcome");
    });
  };
  const goback = () => {
    navigation.navigate("Welcome");
  };
  return (
    <View style={styles.surface}>
      <View style={styles.navigationbar}>
        <TouchableOpacity onPress={goback} style={styles.arrow}>
          <Icon name="arrow-left" color="#eaebf4"  />
        </TouchableOpacity>
        <Text>NOTE</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.text}>{singleNote.header}</TextInput>
        <Text style={styles.text}>{singleNote.content}</Text>
      </View>

      <View>
        <Button
          onPress={deleteNote}
          title="Delete"
          style={styles.button}
          textColor="#eaebf4"
        >
          DELETE
        </Button>
      </View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a6b0d3",
    margin: 10,
  },
  button: {
    backgroundColor: "#414f88",
    margin: 5,
  },
  surface: {
    height: "100%",
    backgroundColor: "#d0d4e7",
  },
  text: {
    padding: 10,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 1,
  },
  arrow: {
    position: "absolute",
    width: "25%",
    top: 12,
    left: 6,
  },
  navigationbar: {
    position: "relative",
    top: 0,
    backgroundColor: "#36406e",
    height: 50,
    width: "100%",
    marginBottom: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
