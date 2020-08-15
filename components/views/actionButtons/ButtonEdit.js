import React, { useContext } from "react";
import { TodoContext } from "../../state/todoState";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default Edit = ({ id, text }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <View style={{ padding: 3, marginHorizontal: 2 }}>
      <TouchableOpacity onPress={() =>
          dispatch({
            type: "EDIT_MODE_ON_TODO",
            value: {id, text},
          })
        }>
      <FontAwesome
        name="edit"
        size={30}
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          textAlign: "center",
          textAlignVertical: "center",
        }}
        color="gray"
      />
      </TouchableOpacity>
    </View>
  );
};
