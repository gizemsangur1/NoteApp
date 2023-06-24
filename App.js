import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/Welcome";
import NoteScreen from "./src/NoteScreen";
import Note from "./src/Note";
import Setup from "./src/Setup";
import { useState } from "react";
import { UserProvider } from "./src/UserContext";
const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  const [user, setUser] = useState("");
  const handleButtonPress = () => {
    navigation.navigate("Setup");
  };

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerTitle: "",
              /*  headerRight: () => (
              <Button title="Buton" onPress={handleButtonPress}></Button>
            ), */
              header: () => null,
            }}
          />
          <Stack.Screen name="Note" component={Note} options={{
              headerTitle: "",
              /*  headerRight: () => (
              <Button title="Buton" onPress={handleButtonPress}></Button>
            ), */
              header: () => null,
            }}/>
          <Stack.Screen name="NoteScreen" component={NoteScreen} />
          <Stack.Screen name="Setup" component={Setup} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
