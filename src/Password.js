import { TextInput } from "react-native";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
const Password = ({ navigation }) => {

    const [password, setPassword] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSavePassword = async () => {
    try {
      await AsyncStorage.setItem('password', password);
      console.log('Şifre başarıyla kaydedildi.');
      navigation.navigate("Welcome");
    } catch (error) {
      console.log('Şifre kaydedilirken bir hata oluştu:', error);
    }
  };

  return (
    <>
      <View>
        <Text>Please set a password for your secret notes !</Text>
        <TextInput
        secureTextEntry
        placeholder="Şifre"
        value={password}
        onChangeText={handlePasswordChange}
      />
      <Button title="Kaydet" onPress={handleSavePassword} >Save</Button>
      </View>
    </>
  );
};

export default Password;
/* 
const styles = StyleSheet.create({}); */
