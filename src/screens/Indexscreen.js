import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import Blogcontext from "../context/Blogcontext";

const Indexscreen = ({ navigation }) => {
  const { data, deleteblog } = useContext(Blogcontext);

  return (
    <View>
      <Button title="Add Blog" onPress={() => navigation.navigate("AddBlog")} />
      <FlatList
        data={data}
        keyExtractor={(blogpost) => blogpost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.innercontainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Detail", {
                    title: item.title,
                    desc: item.Description,
                  });
                }}
              >
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
              <Button
                title="Edit"
                color="green"
                onPress={() => {
                  navigation.navigate("Edit", {
                    id: item.id,
                  });
                }}
              />
              <Button
                title="Delete"
                color="red"
                onPress={() => {
                  deleteblog({ item });
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  innercontainer: {
    flexDirection: "row",
  },
});

export default Indexscreen;
