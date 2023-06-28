import { Alert, TextInput } from "react-native";
import { StyleSheet, View } from "react-native";
import { Button, Surface, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
const SPassword = ({ navigation }) => {
  const [key, setKey] = useState("");

  const handlePassword = async () => {
    const password = await AsyncStorage.getItem("password");
    if (password == key) {
      navigation.navigate("SecretNotes");
    } else {
      alert("Password is wrong please try again.");
    }
  };
  const deleteAllNotes = async () => {
    try {
        await AsyncStorage.removeItem('SNOTES');
      console.log("Tüm notlar silindi.");
    } catch (error) {
      console.log("Notlar silinirken bir hata oluştu:", error);
    }
  };

  const handleForgot = () => {
    Alert.alert(
      "Reset Password",
      "Are you sure you want to reset your password? All your notes will be lost.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("Password");
            deleteAllNotes();
          },
        },
      ],
      { cancelable: false }
    );
    /* alert("Are you sure you want to reset your password.All your notes will be lost"); */
  };
  return (
    <>
      <Surface style={styles.surface}>
        <View style={styles.view}>
          <Text>Please enter your password for secret notes!</Text>
          <TextInput
            secureTextEntry
            placeholder="Password"
            value={key}
            onChangeText={(text) => setKey(text)}
          />
          <Button
            title="Submit"
            onPress={handlePassword}
            style={styles.button}
            textColor="#eaebf4"
          >
            Submit
          </Button>
          <Button onPress={handleForgot}>Forgot my password</Button>
        </View>
      </Surface>
    </>
  );
};

export default SPassword;

const styles = StyleSheet.create({
  view: {
    top: "25%",
    margin: 20,
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
    alignItems: "center",
  },
});
