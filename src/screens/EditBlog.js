import React, { useState, useContext, useReducer } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import Blogcontext from "../context/Blogcontext";

const EditBlog = ({ route, navigation }) => {
  const { editblog } = useContext(Blogcontext);

  const reducer = (state, action) => {
    switch (action.type) {
      case "title":
        return { ...state, newtitle: action.payload };
      case "desc":
        return { ...state, newdesc: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { newtitle: "", newdesc: "" });

  const { id } = route.params;
  return (
    <View style={styles.maincontainer}>
      <View style={styles.innercontainer}>
        <Text style={styles.text}>Title :-</Text>
        <TextInput
          style={styles.inputstyle}
          placeholder="Enter New Title"
          onChangeText={(text) => dispatch({ type: "title", payload: text })}
          value={state.newtitle}
        />
      </View>
      <View style={styles.innercontainer}>
        <Text style={styles.text}>Description :-</Text>
        <TextInput
          style={styles.inputstyle}
          placeholder="Enter New Description"
          onChangeText={(text) => dispatch({ type: "desc", payload: text })}
          value={state.newdesc}
        />
      </View>
      <Button
        title="Confirm Edit"
        onPress={() => {
          var newtitle = state.newtitle;
          var newDesc = state.newdesc;
          editblog({ newtitle, newDesc, id });
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  innercontainer: {
    flexDirection: "row",
    margin: 20,
  },
  inputstyle: {
    borderWidth: 1,
    width: "80%",
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 5,
  },
});

export default EditBlog;
