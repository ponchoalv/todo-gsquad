import React from "react";
import Cancel from "./ButtonCancel";
import Save from "./ButtonSave";
import { StyleSheet, View } from "react-native";

export default EditModeButtons = ({ id, text }) => (
  <View style={styles.actions}>
    <Cancel id={id} />
    <Save id={id}  text= {text}/>
  </View>
);

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
