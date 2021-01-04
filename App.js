import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Indexscreen from "./src/screens/Indexscreen";
import CreateBlog from "./src/screens/CreateBlog";
import ShowBlog from "./src/screens/ShowBlog";
import EditBlog from "./src/screens/EditBlog";

import { Blogprovider } from "./src/context/Blogcontext";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Indexscreen}
          options={{ title: "Blogs" }}
        />
        <Stack.Screen
          name="AddBlog"
          component={CreateBlog}
          options={{ title: "Create" }}
        />
        <Stack.Screen
          name="Detail"
          component={ShowBlog}
          options={{ title: "detail" }}
        />
        <Stack.Screen
          name="Edit"
          component={EditBlog}
          options={{ title: "edit blog" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default () => {
  return (
    <Blogprovider>
      <App />
    </Blogprovider>
  );
};
