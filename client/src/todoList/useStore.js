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

    // פונקציה כללית לעדכון המצב
    updateState: (updates) => {
      setState(prevState => ({
        ...prevState,
        ...updates
      }));
    }
  };

  return {
    state,
    actions
  };
};

export default useStore;