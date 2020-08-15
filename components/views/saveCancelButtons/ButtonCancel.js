import React, { useContext } from "react";
import { TodoContext, getTodoByIdQuery } from "../../state/todoState";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ToggleComplete = ({ id }) => {
  const { state, dispatch } = useContext(TodoContext);
  const todo = getTodoByIdQuery(state, id);

  return (
    <View style={{ padding: 3, marginHorizontal: 2 }}>
      <TouchableOpacity
        onPress={() =>
          dispatch({
            type: "EDIT_MODE_OFF_TODO"
          })
        }
      >
        <FontAwesome name="undo" size={30} color="red"/>
      </TouchableOpacity>
    </View>
  );
};
