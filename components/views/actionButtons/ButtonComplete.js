import React, { useContext } from "react";
import { TodoContext, getTodoByIdQuery } from "../../state/todoState";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ToggleComplete = ({ id }) => {
  const { state, dispatch } = useContext(TodoContext);
  const todo = getTodoByIdQuery(state, id);
  const icon = todo.completed ? "undo" : "check";
  const color = todo.completed ? "gray" : "green";

  return (
    <View style={{ padding: 3, marginHorizontal: 2 }}>
      <TouchableOpacity
        onPress={() =>
          dispatch({
            type: "TOGGLE_COMPLETE_TODO",
            value: id,
          })
        }>
        <FontAwesome name={icon} size={30} color={color} />
      </TouchableOpacity>
    </View>
  );
};
