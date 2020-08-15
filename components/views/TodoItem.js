import React, { useContext } from "react";
import ActionButtons from "./actionButtons/ActionButtons";
import { View, Text, TextInput, StyleSheet } from "react-native";
import EditModeButtons from "./saveCancelButtons/EditModeOnButtons";
import { TodoContext } from "../state/todoState";

export default TodoItem = ({ completed, id, text }) => {
  const { state, dispatch } = useContext(TodoContext);

  const textDecorationLine = completed ? "line-through" : "none";
  const color = completed ? "gray" : "black";

  return state.editedTodoId === id ? (
    <View style={styles.item}>
      <TextInput
        style={{ ...styles.title, textDecorationLine, color }}
        value={state.editedTodoText}
        onChangeText={(value) =>
          dispatch({ type: "UPDATE_EDITED_TEXT", value })
        }
        autoFocus
      />
      <EditModeButtons id={id} text={text} />
    </View>
  ) : (
    <View style={styles.item}>
      <Text textBreakStrategy="balanced" style={{ ...styles.title, textDecorationLine, color }}>{text}</Text>
      <ActionButtons id={id} text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    color: "#fff",
    padding: 8,
    marginVertical: 0,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlignVertical: "center",
  },
  title: {
    fontSize: 18,
    maxWidth: "70%",
    padding: 5
  },
});
