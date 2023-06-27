import {  StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const NoteScreen = () => {
  const [note, setNote] = useState({ id: "", header: "", content: "" });
  const navigation = useNavigation();

  const saveNote = async () => {
    try {
      const value = await AsyncStorage.getItem("NOTES");
      const notes = value ? JSON.parse(value) : [];
      const newNote = { ...note, id: Date.now().toString() };
      notes.push(newNote);
      await AsyncStorage.setItem("NOTES", JSON.stringify(notes));
      navigation.navigate("Welcome");
      setNote({ id: "", header: "", content: "" });
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  };

  return (
    <>
      <View style={styles.surface}>
        <View style={styles.container}>
          <TextInput
            style={styles.header}
            value={note.header}
            onChangeText={(text) => setNote({ ...note, header: text })}
            multiline={false}
            autoFocus
            placeholder="Header"
          />
          <TextInput
            style={styles.text}
            value={note.content}
            onChangeText={(text) => setNote({ ...note, content: text })}
            multiline={true}
            placeholder="Note"
          />
        </View>
        <View>
          <Button
            title="SUBMIT"
            onPress={saveNote}
            style={styles.button}
            textColor="#eaebf4"
          >SUBMIT</Button>
        </View>
      </View>
    </>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a6b0d3",
    margin: 10,
  },
  button: {
    backgroundColor: "#414f88",
    margin: 5,
    height:50,
    justifyContent:"center",
  },
  surface: {
    height: "100%",
    backgroundColor: "#d0d4e7",
  },
  text: {
    padding: 10,
    margin: 10,
    borderColor: "black",
    fontSize:20,
  },
  header: {
    padding: 10,
    margin: 10,
    borderColor: "black",
    fontSize:30,
  },
});
