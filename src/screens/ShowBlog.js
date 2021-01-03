import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ShowBlog = ({ route }) => {
  const { title, desc } = route.params;
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}> {desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 15,
  },
});

export default ShowBlog;
