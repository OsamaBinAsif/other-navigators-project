import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>
        This is the{" "}
        <Text style={{ fontWeight: "bold", color: "red" }}>"Welcome" </Text>
        Screen
      </Text>
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
