import React, { useContext, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { TodoContext } from "../state/todoState";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default NewTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const [text, onChangeText] = useState();
  const saveTodo = () => {
    if (text && text.trim() !== "") {
      dispatch({ type: "ADD_TODO", value: text });
      onChangeText("");
    }
  };

  return (
    <View style={styles.item}>
      <TextInput
        style={{ ...styles.title }}
        value={text}
        onChangeText={(value) => onChangeText(value)}
        placeholder="Add a new task to the todo..."
        placeholderTextColor="gray"
      />
      <TouchableOpacity onPress={saveTodo}>
        <MaterialIcons
          name="playlist-add"
          size={45}
          color="blue"
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            textAlign: "center",
            textAlignVertical: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 15,
    marginBottom: 20,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlignVertical: "center",
  },
  title: {
    fontSize: 18,
    color: "black",
    padding: 3
  },
});
