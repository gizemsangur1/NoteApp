import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Button, Surface, TextInput } from "react-native-paper";
import { useState } from "react";
import { UserContext } from "./UserContext";

const Setup = () => {
    const [name, setName] = useState("");
    const { user, setUser } = useContext(UserContext);
  
    const handleChange =  (value) => {
      setName(value);
      
    };
  
    const handleSave = () => {
      setUser(name);
    };
  
  return (
    <Surface style={styles.surface}>
      <View style={styles.view}>
        <View style={styles.textf}>
          <Text style={styles.text}>Name</Text>
        </View>
        <View>
          <TextInput
          style={styles.textinput}
            value={name}
            onChangeText={handleChange}
          />
          <Button title="Save" onPress={handleSave} style={styles.Button1} id="Buttons">Save</Button>
        </View>
        <View style={styles.textf}>
          <Text style={styles.text}>Setup Color</Text>
        </View>
        <View style={styles.container}>
          <Button style={styles.Button1} ></Button>
          <Button style={styles.Button2}></Button>
          <Button style={styles.Button3}></Button>
          <Button style={styles.Button4}></Button>
        </View>
      </View>
    </Surface>
  );
};

export default Setup;

const styles = StyleSheet.create({
  Button1: {
    backgroundColor:"#6374ae" ,
    width: 5,
    margin: 15,
  },
  Button2: {
    backgroundColor:"#438e96",
    width: 5,
    margin: 15,
  },
  Button3: {
    backgroundColor:"#ba7264" ,
    width: 5,
    margin: 15,
  },
  Button4: {
    backgroundColor: "#c4544a" ,
    width: 5,
    margin: 15,
  },
  container: {
    flexDirection: "row",
  },
  text: {
    fontSize: 25,
  },
  textf: {
    justifyContent: "center",
    textAlign: "center",
    margin: 5,
  },
  textinput: {
    margin: 5,
  },
  surface: {
    height: "100%",
  },
});
