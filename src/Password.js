import { TextInput } from "react-native";
import { StyleSheet, View } from "react-native";
import { Button, Surface, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";
const Password = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const handleSavePassword = async () => {
    try {
      await AsyncStorage.setItem("password", password);
      console.log("Şifre başarıyla kaydedildi.");
      navigation.navigate("Welcome");
    } catch (error) {
      console.log("Şifre kaydedilirken bir hata oluştu:", error);
    }
  };

  return (
    <>
      <Surface style={styles.surface}>
        <View style={styles.view}>
          <Text>Please set a password for your secret notes!</Text>
          <TextInput
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            title="Save"
            onPress={handleSavePassword}
            style={styles.button}
            textColor="#eaebf4"
          >
            Save
          </Button>
        </View>
      </Surface>
    </>
  );
};

export default Password;

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
