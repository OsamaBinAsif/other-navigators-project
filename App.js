import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UserScreen from "./screens/UserScreen";
import {Ionicons} from "@expo/vector-icons"
import WelcomeScreen from "./screens/WelcomeScreen";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation={true}
        initialRouteName="welcomescreen"
        screenOptions={{
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#3c0a6b",
        //  drawerStyle: {
        //    backgroundColor: "#ccc",
        //  },
          headerStyle: {
            backgroundColor: "#3c0a6b",
          },
          headerTintColor: "white",
        }}
      >
        {/*<Drawer.Screen
          name="welcomescreen"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({color, focused, size})=>(<Ionicons name="home" color={color} size={size}/>)
          }}
        />*/}
        <Drawer.Screen
          name="BottomTabs"
          component={BottomTabNavigation}
          options={{
            title:"Home",
            drawerLabel: "Welcome Screen",
            drawerIcon: ({color, focused, size})=>(<Ionicons name="home" color={color} size={size}/>),
            //headerShown:false,
          }}
        />
        <Drawer.Screen
          name="userscreen"
          component={UserScreen}
          options={{
            drawerLabel: "User Screen",
            drawerIcon: ({color, size})=>(<Ionicons name="person" color={color} size={size}/>),
            //headerShown: false,
            headerShadowVisible: false
          }}
        />
      </Drawer.Navigator>
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
