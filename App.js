import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import { Navbar } from "./components/Navbar";
import { AddTodo } from "./components/AddTodo";
import { Todo } from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <Navbar title="Todo App" />

      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />

        <FlatList
          data={todos}
          renderItem={({ item }) => {
            return <Todo todo={item} deleteTodo={deleteTodo} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});
