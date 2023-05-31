import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from "react";

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
    const newNotes = await notes.filter((note) => note !== singleNote);
    await AsyncStorage.setItem("NOTES", JSON.stringify(newNotes)).then(() =>
      navigation.navigate("Welcome")
    );
  };

  return (
    <View style={styles.container}>
      <Text>Notes</Text>
      <Text>{singleNote}</Text>
      <View>
        <Button onPress={deleteNote} title="delete"></Button>
      </View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({});
