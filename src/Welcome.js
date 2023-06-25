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
import { TouchableOpacity } from "react-native";
import { Surface } from "react-native-paper";
import { Icon } from "@rneui/themed";
import { useEffect } from "react";
import { UserContext } from "./UserContext";
export default function Welcome({ navigation }) {
  const [notes, setNotes] = useState([]);
  const { user } = React.useContext(UserContext);
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
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Note", { singleNote: item });
      }}
    >
      <View style={styles.item}>
        <Text style={styles.Text}>{item.header}</Text>
      </View>
    </TouchableOpacity>
  );
  const gotoCreate = () => {
    navigation.navigate("NoteScreen");
  };
  const gotoSetup = () => {
    navigation.navigate("Setup");
  };
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const [date, setDate] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (6 <= currentHour && currentHour < 12) {
      setDate("Morning");
    } else if (12 <= currentHour && currentHour < 17) {
      setDate("Afternoon");
    } else if (17 <= currentHour && currentHour < 22) {
      setDate("Evening");
    } else {
      setDate("Night");
    }
  }, []);
  return (
    <Surface style={styles.surface} elevation={4}>
      
      <View style={styles.container}>
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Icon
          name="add"
          onPress={gotoCreate}
          style={styles.Button}
          color="#6374ae"
        />
      </View>
    </Surface>
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
    borderRadius: 50,
    borderColor: "#6374ae",
    borderWidth: 1,
    padding: 10,
  },

  item: {
    borderRadius: 5,
    height: 50,
    backgroundColor: "#414f88",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  Text: {
    fontSize: 35,
    color: "#eaebf4",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    right: 16,
    borderRadius: 50,
  },
  button: {
    position: "absolute",
    width: "15%",
    top: 12,
    right: 6,
  },
  user: {
    top: 12,
    left: 6,
    fontSize: 15,
    color: "#eaebf4",
  },
  surface: {
    padding: 8,
    height: "100%",
    alignItems: "center",
    backgroundColor: "#d0d4e7",
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
