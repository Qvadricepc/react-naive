import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Todo } from '@/app/App';

type InputProps = {
  todos: Todo;
  setTodos: React.Dispatch<
    React.SetStateAction<{
      text: string;
      id: string;
    }>
  >;
  handlePress: () => void;
};

const Input = ({ todos, setTodos, handlePress }: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter todo"
        value={todos.text}
        onChangeText={e => setTodos(prev => ({ ...prev, text: e }))}
      />
      <Button title="Add" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
});

export default Input;
