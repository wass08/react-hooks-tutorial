import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { FoodContext } from "~/contexts/FoodContext";
import { RootNavigator } from "~/navigation/RootNavigator";

export default function App() {
  return (
    <FoodContext.Provider value={{ meal: "Burger 🍔" }}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </FoodContext.Provider>
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
