import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Feed from "../screens/Feed";
import { Ionicons } from "@expo/vector-icons";

const BottomTabNavigation = () => {
  const BottomTabs = createBottomTabNavigator();
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#3c0a6b" },
        headerTintColor: "white",
        tabBarActiveTintColor: "#3c0a6b",
      }}
    >
      <BottomTabs.Screen
        name="profile"
        component={Profile}
        options={{
            headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="settings"
        component={Settings}
        options={{
            headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="feed"
        component={Feed}
        options={{
            headerShown: false,
          headerLeft: ({ tintColor, size }) => {
            return (
              <TouchableOpacity>
                <Ionicons name="menu" />
              </TouchableOpacity>
            );
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="walk" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
