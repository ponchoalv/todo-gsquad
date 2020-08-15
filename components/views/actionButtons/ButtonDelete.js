import React, { useContext } from "react";
import { TodoContext } from "../../state/todoState";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default Delete = ({ id }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <View style={{ padding: 3, marginHorizontal: 2 }}>
      <TouchableOpacity onPress={() =>
          dispatch({
            type: "REMOVE_TODO",
            value: id,
          })
        }>
      <FontAwesome
        name="trash-o"
        size={30}
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          textAlign: "center",
          textAlignVertical: "center",
        }}
        color="red"
      />
      </TouchableOpacity>
    </View>
  );
};
