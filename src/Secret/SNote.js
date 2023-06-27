import { StyleSheet, View, TextInput } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from "react";

const SNote = ({ route }) => {
  const [Snotes, setSNotes] = useState([]);
  const navigation = useNavigation();
  const { singleSNote } = route.params;
  const [headerValue, setHeaderValue] = useState(singleSNote.header || "");
  const [contentValue, setContentValue] = useState(singleSNote.content || "");
  useFocusEffect(
    React.useCallback(() => {
      getSNotes();
    }, [])
  );

  const getSNotes = () => {
    AsyncStorage.getItem("SNOTES").then((Snotes) => {
      setSNotes(JSON.parse(Snotes));
    });
  };

  const updatedSNote = {
    ...singleSNote,
    header: headerValue,
    content: contentValue,
  };

  const updateNote = async () => {
    const updatedSNotes = [...Snotes];
    const updatedSNote = {
      ...singleSNote,
      header: headerValue,
      content: contentValue,
    };

    const noteIndex = updatedSNotes.findIndex(
      (Snote) => Snote.id === singleSNote.id
    );
    updatedSNotes[noteIndex] = updatedSNote;

    await AsyncStorage.setItem("SNOTES", JSON.stringify(updatedSNotes)).then(
      () => {
        setSNotes(updatedSNotes);
        navigation.navigate("SecretNotes");
      }
    );
  };

  const deleteNote = async () => {
    const newSNotes = Snotes.filter((Snote) => Snote.id !== singleSNote.id);
    await AsyncStorage.setItem("SNOTES", JSON.stringify(newSNotes)).then(() => {
      setSNotes(newSNotes);
      navigation.navigate("SecretNotes");
    });
  };
  return (
    <View style={styles.surface}>
      <View style={styles.container}>
        <TextInput
          style={styles.header}
          value={headerValue}
          defaultValue={singleSNote.header}
          onChangeText={(text) => setHeaderValue(text)}
          placeholder="Header"
        ></TextInput>
        <TextInput
          style={styles.text}
          value={contentValue}
          defaultValue={singleSNote.content}
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

export default SNote;

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
