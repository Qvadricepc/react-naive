import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Todo } from '@/app/App';

type ItemProps = {
  todo: Todo;
  handleDelete: (id: string) => void;
};

const Item = ({ todo, handleDelete }: ItemProps) => {
  return (
    <Pressable
      onPress={() => handleDelete(todo.id)}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{todo.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
    color: '#333',
  },
  pressed: {
    opacity: 0.5,
  },
});

export default Item;
