import React, { useContext } from "react";
import { TodoContext, getFilteredTodosQuery } from "../state/todoState";
import { SafeAreaView, View, StyleSheet, Text, StatusBar } from "react-native";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import TodoItem from "./TodoItem";
import Header from "./Header";
import Footer from "./Footer";

const Item = ({ text }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{text}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <TodoItem text={item.text} id={item.id} completed={item.completed} />
  );
  const { state } = useContext(TodoContext);
  const todos = getFilteredTodosQuery(state);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <KeyboardAwareFlatList
        enableOnAndroid
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View>
            <Text style={styles.emptyList}>No tasks here!</Text>
          </View>
        )}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 32,
  },
  todoListTitle: {
    fontSize: 32,
    backgroundColor: "white",
    padding: 20,
    alignContent: "center",
    alignSelf: "center",
  },
  emptyList: {
    fontSize: 32,
    backgroundColor: "white",
    padding: 20,
    alignContent: "center",
    alignSelf: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    flexDirection: "row",
    color: "gray",
  },
});

export default App;
