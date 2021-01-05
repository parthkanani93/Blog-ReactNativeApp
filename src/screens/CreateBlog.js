import React, { useContext, useReducer } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import Blogcontext from "../context/Blogcontext";

const CreateBlog = ({ navigation }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "title":
        return { ...state, title: action.payload };
      case "desc":
        return { ...state, desc: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { title: "", desc: "" });

  const { addblog } = useContext(Blogcontext);
  return (
    <View style={styles.maincontainer}>
      <View style={styles.innercontainer}>
        <Text style={styles.text}>Title :-</Text>
        <TextInput
          style={styles.inputstyle}
          placeholder="Enter Title"
          onChangeText={(text) => dispatch({ type: "title", payload: text })}
          value={state.title}
        />
      </View>
      <View style={styles.innercontainer}>
        <Text style={styles.text}>Description :-</Text>
        <TextInput
          style={styles.inputstyle}
          placeholder="Enter Description"
          onChangeText={(text) => dispatch({ type: "desc", payload: text })}
          value={state.desc}
        />
      </View>
      <Button
        title="Create"
        onPress={() => {
          var newtitle = state.title;
          var newdesc = state.desc;
          addblog({ newtitle, newdesc });
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

export default CreateBlog;
