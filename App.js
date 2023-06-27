import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/Welcome";
import NoteScreen from "./src/NoteScreen";
import Note from "./src/Note";
import { useState } from "react";
import { UserProvider } from "./src/UserContext";
import { useEffect } from "react";
import * as React from "react";
import Password from "./src/Password";
import SNote from "./src/Secret/SNote";
import SNoteScreen from "./src/Secret/SNoteScreen";
import SecretNotes from "./src/Secret/SecretNotes";
const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
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
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerTitle: "",

              headerLeft: () => (
                <View>
                  <Text style={{ color: "#eaebf4", fontSize: 20 }}>
                    Good {date} !
                  </Text>
                </View>
              ),
              headerStyle: {
                backgroundColor: "#36406e",
              },
            }}
          />
          <Stack.Screen
            name="Note"
            component={Note}
            options={{
              headerTitle: "",
              headerStyle: {
                backgroundColor: "#36406e",
                color: "#eaebf4",
              },
              headerTintColor: "#eaebf4",
            }}
          />
          <Stack.Screen
            name="NoteScreen"
            component={NoteScreen}
            options={{
              headerTitle: "",
              headerStyle: {
                backgroundColor: "#36406e",
                color: "#eaebf4",
              },
              headerTintColor: "#eaebf4",
            }}
          />

          <Stack.Screen
            name="Password"
            component={Password}
            options={{
              headerTitle: "",
              headerStyle: {
                backgroundColor: "#36406e",
                color: "#eaebf4",
              },
              headerTintColor: "#eaebf4",
            }}
          />
          <Stack.Screen
            name="SNote"
            component={SNote}
            options={{
              headerTitle: "",
              headerStyle: {
                backgroundColor: "#36406e",
                color: "#eaebf4",
              },
              headerTintColor: "#eaebf4",
            }}
          />
          <Stack.Screen
            name="SNoteScreen"
            component={SNoteScreen}
            options={{
              headerTitle: "",
              headerStyle: {
                backgroundColor: "#36406e",
                color: "#eaebf4",
              },
              headerTintColor: "#eaebf4",
            }}
          />
          <Stack.Screen
            name="SecretNotes"
            component={SecretNotes}
            options={{
              headerTitle: "",
              headerStyle: {
                backgroundColor: "#36406e",
                color: "#eaebf4",
              },
              headerTintColor: "#eaebf4",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
