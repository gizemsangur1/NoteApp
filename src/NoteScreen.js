import { Button, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NoteScreen = () => {
  const [note, setNote] = useState("");
  const navigation = useNavigation();

  const saveNote = async () => {
    const value = await AsyncStorage.getItem("NOTES");
    const n = value ? JSON.parse(value) : [];
    n.push(note);
    await AsyncStorage.setItem("NOTES",JSON.stringify(n)).then(()=>navigation.navigate("Welcome"));
    setNote("");
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <TextInput
        value={note}
        onChangeText={setNote}
        multiline={true}
        autoFocus
        />
        <Button title="SUBMIT" onPress={saveNote}/>
      </View>
    </>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({});
