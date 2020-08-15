import { StatusBar } from "expo-status-bar";
import React from "react";
import TodoList from "./components/views/TodoList";
import {TodoContextProvider} from "./components/state/todoState";

export default function App() {
  return (
    <TodoContextProvider>
        <TodoList />
        <StatusBar style="auto" />
    </TodoContextProvider>
  );
}
