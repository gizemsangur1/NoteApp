import {  StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SNoteScreen = () => {
  const [Snote, setSNote] = useState({ id: "", header: "", content: "" });
  const navigation = useNavigation();

  const saveNote = async () => {
    try {
      const value = await AsyncStorage.getItem("SNOTES");
      const Snotes = value ? JSON.parse(value) : [];
      const newSNote = { ...Snote, id: Date.now().toString() };
      Snotes.push(newSNote);
      await AsyncStorage.setItem("SNOTES", JSON.stringify(Snotes));
      navigation.navigate("SecretNotes");
      setSNote({ id: "", header: "", content: "" });
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
            value={Snote.header}
            onChangeText={(text) => setSNote({ ...Snote, header: text })}
            multiline={false}
            autoFocus
            placeholder="Header"
          />
          <TextInput
            style={styles.text}
            value={Snote.content}
            onChangeText={(text) => setSNote({ ...Snote, content: text })}
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

export default SNoteScreen;

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
