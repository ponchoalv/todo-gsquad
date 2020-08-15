import React from "react";
import Delete from "./ButtonDelete";
import Edit from "./ButtonEdit";
import ToggleComplete from "./ButtonComplete";
import { StyleSheet, View } from "react-native";

export default ActionButtons = ({ id, text }) => (
  <View style={styles.actions}>
    <Edit id={id} text={text}/>
    <Delete id={id} />
    <ToggleComplete id={id} />
  </View>
);

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
