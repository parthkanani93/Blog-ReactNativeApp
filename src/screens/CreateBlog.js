import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { add } from "react-native-reanimated";
import Blogcontext from "../context/Blogcontext";

const CreateBlog = ({ navigation }) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const { addblog } = useContext(Blogcontext);
  return (
    <View style={styles.maincontainer}>
      <View style={styles.innercontainer}>
        <Text style={styles.text}>Title :-</Text>
        <TextInput
          style={styles.inputstyle}
          placeholder="Enter Title"
          onChangeText={(text) => settitle(text)}
          value={title}
        />
      </View>
      <View style={styles.innercontainer}>
        <Text style={styles.text}>Description :-</Text>
        <TextInput
          style={styles.inputstyle}
          placeholder="Enter Description"
          onChangeText={(text) => setdesc(text)}
          value={desc}
        />
      </View>
      <Button
        title="Create"
        onPress={() => {
          addblog({ title, desc });
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
