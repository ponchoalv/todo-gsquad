import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import {
  TodoContext,
  totalTodoCountQuery,
  completedTodoCountQuery,
  notCompletedTodoCountQuery,
} from "../state/todoState";

export default Footer = () => {
  const { state, dispatch } = useContext(TodoContext);
  const totalTodos = totalTodoCountQuery(state);
  const completedTodos = completedTodoCountQuery(state);
  const todo = notCompletedTodoCountQuery(state);

  const seeButtonTitle = state.showAll ? "show pending" : "show all";

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.todoListTitle}>Total: </Text>
        <Text style={styles.todoListTitle}>{totalTodos}</Text>
        <Text style={styles.todoListTitle}> | </Text>
        <Text style={styles.todoListTitle}>Completed: </Text>
        <Text style={styles.todoListTitle}>{completedTodos}</Text>
        <Text style={styles.todoListTitle}> | </Text>
        <Text style={styles.todoListTitle}>Pending: </Text>
        <Text style={styles.todoListTitle}>{todo}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title={seeButtonTitle} onPress={() => dispatch({type: "TOGGLE_SHOW_ALL_TODOS"})}></Button>
        <Button title="clear complete" onPress={() => dispatch({type: "CLEAR_COMPLETED"})}></Button>
        <Button title="clear all" onPress={() => dispatch({type: "RESET"})}></Button>
      </View>
    </>

  );
};

const styles = StyleSheet.create({
  todoListTitle: {
    fontSize: 15,
    backgroundColor: "white",
    padding: 1,
    color: "black",
    opacity: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5
  },
});
