import { Button, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NoteScreen = () => {
    const [note, setNote] = useState({ header: "", content: "" });
    const navigation = useNavigation();
    
    const saveNote = async () => {
      const value = await AsyncStorage.getItem("NOTES");
      const notes = value ? JSON.parse(value) : [];
      notes.push(note);
      await AsyncStorage.setItem("NOTES", JSON.stringify(notes)).then(() =>
        navigation.navigate("Welcome")
      );
      setNote({ header: "", content: "" });
    };
    
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View>
          <TextInput
            value={note.header}
            onChangeText={(text) => setNote({ ...note, header: text })}
            multiline={false}
            autoFocus
          />
          <TextInput
            value={note.content}
            onChangeText={(text) => setNote({ ...note, content: text })}
            multiline={true}
            autoFocus
          />
          <Button title="SUBMIT" onPress={saveNote} />
        </View>
      </>
    );
};

export default NoteScreen;

const styles = StyleSheet.create({});
