import React, { createContext, useContext, useReducer } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const todo = { text: action.value, completed: false, id: uuidv4() };
      return {
        ...state,
        todos: state.todos.concat(todo),
      };
    }

    case "REMOVE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.value),
      };
    }

    case "TOGGLE_COMPLETE_TODO": {
      const todoCompleted = state.todos.find((t) => t.id === action.value);
      todoCompleted.completed = !todoCompleted.completed;

      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.value ? todoCompleted : t
        ),
      };
    }

    case "SAVE_TODO": {
      const editedTodo = state.todos.find((t) => t.id === action.value);
      editedTodo.text = state.editedTodoText;

      return {
        ...state,
        editedTodoId: null,
        editedTodoText: null,
        todos: state.todos.map((t) =>
          t.id === action.value.id ? editedTodo : t
        ),
      };
    }

    case "CLEAR_COMPLETED": {
      return {
        ...state,
        todos: state.todos.filter((t) => !t.completed),
      };
    }

    case "EDIT_MODE_ON_TODO": {
      return {
        ...state,
        editedTodoId: action.value.id,
        editedTodoText: action.value.text,
      };
    }

    case "UPDATE_EDITED_TEXT": {
      return { ...state, editedTodoText: action.value };
    }

    case "EDIT_MODE_OFF_TODO": {
      return {
        ...state,
        editedTodoId: null,
        editedTodoText: null,
      };
    }

    case "TOGGLE_SHOW_ALL_TODOS": {
      return {
        ...state,
        showAll: !state.showAll,
      };
    }

    case "RESET": {
      return initialState
    }

    default:
      return state;
  }
};

export const initialState = {
  todos: [
  ],
  showAll: true,
  editedTodoId: null,
};

export const TodoContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export const completedTodoCountQuery = (state) =>
  state.todos.filter((t) => t.completed).length;

export const totalTodoCountQuery = (state) => state.todos.length;

export const notCompletedTodoCountQuery = (state) =>
  state.todos.filter((t) => !t.completed).length;

export const getTodoByIdQuery = (state, id) =>
  state.todos.find((t) => t.id === id);

export const getFilteredTodosQuery = (state) =>
  state.showAll ? state.todos : state.todos.filter((t) => !t.completed);
