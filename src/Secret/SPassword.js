import { TextInput } from "react-native";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
const SPassword = ({ navigation }) => {
  const [key, setKey] = useState("");

  const handlePassword = async () => {
    const password = await AsyncStorage.getItem("password");
    if (password == key) {
        navigation.navigate("SecretNotes");
    }
    else{
        alert("Password is wrong please try again.")
    }
  };

  return (
    <>
      <View>
        <Text>Please enter your password for secret notes!</Text>
        <TextInput
          secureTextEntry
          placeholder="Şifre"
          value={key}
          onChangeText={(text) => setKey(text)}
        />
        <Button title="Kaydet" onPress={handlePassword}>
          Save
        </Button>
      </View>
    </>
  );
};

export default SPassword;
