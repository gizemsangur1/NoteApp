import { StyleSheet  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/Welcome"
import NoteScreen from "./src/NoteScreen";
import Note from "./src/Note";
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator >
         <Stack.Screen name="Welcome" component={Welcome} />
         <Stack.Screen name="Note" component={Note} />
        <Stack.Screen name="NoteScreen" component={NoteScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
