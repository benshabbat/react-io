// useStore.js
import { useState } from 'react';

const useStore = () => {
    const [state, setState] = useState({
      todos: [],
      // users:[]
      });

  // פונקציות לעדכון ה-state
  const actions = {
    addTodo: (newTitle) => {
      setState(prevState => ({
        todos: [...prevState.todos, newTitle]
      }));
    },
    editTodo: (it,newTitle) => {
      setState(prevState => ({
        todos: [...prevState.todos, newTitle]
      }));
    },
    deletTodo: (id) => {
      setState(prevState => ({
        todos: [...prevState.todos, newTitle]
      }));
    },
  };

  return {
    state,
    actions
  };
};

export default useStore;