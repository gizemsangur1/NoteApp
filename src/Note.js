import { StyleSheet, View, TextInput } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Note = ({ route }) => {
  const [notes, setNotes] = useState([]);
  const navigation = useNavigation();
  const { singleNote } = route.params;
  const [headerValue, setHeaderValue] = useState(singleNote.header || "");
  const [contentValue, setContentValue] = useState(singleNote.content || "");
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

  const updatedNote = {
    ...singleNote,
    header: headerValue,
    content: contentValue,
  };

  const updateNote = async () => {
    const updatedNotes = [...notes];
    const updatedNote = {
      ...singleNote,
      header: headerValue,
      content: contentValue,
    };

    const noteIndex = updatedNotes.findIndex(
      (note) => note.id === singleNote.id
    );
    updatedNotes[noteIndex] = updatedNote;

    await AsyncStorage.setItem("NOTES", JSON.stringify(updatedNotes)).then(
      () => {
        setNotes(updatedNotes);
        navigation.navigate("Welcome");
      }
    );
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
      <View style={styles.container}>
        <TextInput
          style={styles.header}
          value={headerValue}
          defaultValue={singleNote.header}
          onChangeText={(text) => setHeaderValue(text)}
          placeholder="Header"
        ></TextInput>
        <TextInput
          style={styles.text}
          value={contentValue}
          defaultValue={singleNote.content}
          onChangeText={(text) => setContentValue(text)}
          multiline={true}
          placeholder="Note"
        ></TextInput>
      </View>
      <View style={styles.buttonr}>
        <View style={styles.buttons}>
          <Button
            onPress={deleteNote}
            title="Delete"
            style={styles.button}
            textColor="#eaebf4"
          >
            DELETE
          </Button>
        </View>
        <View style={styles.buttons}>
          <Button
            onPress={updateNote}
            title="Submit"
            style={styles.button}
            textColor="#eaebf4"
          >
            SUBMIT
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a6b0d3",
    margin: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#414f88",
    margin: 5,
    height: 50,
    justifyContent: "center",
  },
  surface: {
    height: "100%",
    backgroundColor: "#d0d4e7",
  },
  text: {
    padding: 10,
    margin: 10,
    borderColor: "black",
    fontSize: 20,
  },
  header: {
    padding: 10,
    margin: 10,
    borderColor: "black",
    fontSize: 30,
  },
  arrow: {
    position: "absolute",
    width: "25%",
    top: 12,
    left: 6,
  },
  buttonr: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttons: {
    flex: 0.5,
  },
});
