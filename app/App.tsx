import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [todos, setTodos] = React.useState<string[]>([]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo application!!!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Enter todo'}
          onChange={e => setTodos([...todos, e.nativeEvent.text])}
        />
        <Button title={'Tap me!'} />
      </View>
      {todos.length > 0 ? (
        todos.map((todo, index) => {
          return (
            <View key={index}>
              <Text>{todo}</Text>
            </View>
          );
        })
      ) : (
        <Text>No todos</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '70%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
