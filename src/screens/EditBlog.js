import React, { useState, useContext } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import Blogcontext from "../context/Blogcontext";

const EditBlog = ({ route, navigation }) => {
  const { editblog } = useContext(Blogcontext);
  const [newtitle, setnewtitle] = useState("");
  const [newDesc, setnewDesc] = useState("");
  const { id } = route.params;
  return (
    <View style={styles.maincontainer}>
      <View style={styles.innercontainer}>
        <Text style={styles.text}>Title :-</Text>
        <TextInput
          style={styles.inputstyle}
          placeholder="Enter New Title"
          onChangeText={(text) => setnewtitle(text)}
          value={newtitle}
        />
      </View>
      <View style={styles.innercontainer}>
        <Text style={styles.text}>Description :-</Text>
        <TextInput
          style={styles.inputstyle}
          placeholder="Enter New Description"
          onChangeText={(text) => setnewDesc(text)}
          value={newDesc}
        />
      </View>
      <Button
        title="Confirm Edit"
        onPress={() => {
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
