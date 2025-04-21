import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoButton from "./TodoButton";

const Todo = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoText}>{todo.title}</Text>
      <View style={styles.buttonGroup}>
        <TodoButton
          name={todo.complete ? "Done" : "Complete"}
          complete={todo.complete}
          onPress={() => onToggleComplete(todo.todoIndex)}
        />
        <TodoButton name="Delete" onPress={() => onDelete(todo.todoIndex)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#ededed",
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todoText: {
    fontSize: 17,
  },
  buttonGroup: {
    alignItems: "flex-end",
    flexDirection: 'row',
    gap: 5,
  },
});

export default Todo;
