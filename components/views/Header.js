import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NewTodo from "./NewTodo";

export default Header = () => (
  <View>
    <Text style={styles.todoListTitle}>Todo List</Text>
    <NewTodo />
  </View>
);

const styles = StyleSheet.create({
  todoListTitle: {
    fontSize: 32,
    backgroundColor: "white",
    padding: 20,
    alignContent: "center",
    alignSelf: "center",
  },
});
