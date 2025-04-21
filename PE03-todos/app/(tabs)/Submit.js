import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
const Submit = ({ onSubmit }) => (
  <View style={styles.wrapper}>
    <Pressable style={styles.button} onPress={onSubmit}>
      <Text style={styles.text}>Submit</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginRight: 20,
    alignItems: "flex-end",
  },
  button: {
    padding: 20,
    paddingLeft: 70,
    paddingRight: 70,
    backgroundColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {width:1, height: 1},
    shadowColor: "#000",
  },
  text: {
    fontWeight: "bold",
    color: "#888"
  }
});

export default Submit;
