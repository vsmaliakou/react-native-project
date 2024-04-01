import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Todo = ({ todo, deleteTodo }) => {
  return (
    <TouchableOpacity onLongPress={() => deleteTodo(todo.id)}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    borderStyle: "solid",
    borderRadius: 5,
  },
});
