import React, { useContext, useEffect } from "react";
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
  const { data } = useContext(Blogcontext);

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
                <Text style={styles.text}>{item.id}</Text>
              </TouchableOpacity>
              <Button title="Edit" color="green" />
              <Button
                title="Delete"
                color="red"
                onPress={() => {
                  data.splice(item.id, 1).concat(data.slice(-1));
                  console.log("delete sucessful");
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
