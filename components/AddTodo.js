import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const onSubmit = () => {
    if (value.trim()) {
      addTodo(value);
      setValue("");
    } else {
      Alert.alert("Название дела не может быть пустым");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="Введите название дела..."
        autoCorrect={false}
        autoCapitalize="none"
        value={value}
        onChangeText={setValue}
      />

      <Button title="Добавить" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderColor: "#3949ab",
  },
});
