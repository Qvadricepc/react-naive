import React from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Loader from '@/app/components/loader';
import Item from '@/app/components/item';
import Input from '@/app/components/input';

export type Todo = {
  id: string;
  text: string;
};

const initialTodo = { text: '', id: '' };

export default function App() {
  const [todos, setTodos] = React.useState<Todo>(initialTodo);
  const [loading, setLoading] = React.useState(true);
  const [todosList, setTodosList] = React.useState<Todo[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handlePress = () => {
    const newTodo = { ...todos, id: Math.random().toString() };
    setTodosList(prev => [...prev, newTodo]);
    setTodos({ text: '', id: '' });
    setModalVisible(false);
  };

  const handleDelete = (id: string) => {
    setTodosList(prev => prev.filter(todo => todo.id !== id));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo application</Text>
      <Button title="Add todo" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType={'slide'}>
        <Input todos={todos} setTodos={setTodos} handlePress={handlePress} />
      </Modal>
      <View style={styles.listContainer}>
        <ScrollView style={styles.scrollView}>
          {todosList.length > 0 ? (
            todosList.map(todo => <Item key={todo.id} todo={todo} handleDelete={handleDelete} />)
          ) : (
            <Text style={styles.emptyText}>No todos yet. Add one!</Text>
          )}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
    fontSize: 16,
  },
});
