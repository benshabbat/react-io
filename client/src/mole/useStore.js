// useStore.js
import { useState } from 'react';
const GAME_DURATION = 30;
const NUMBER_OF_HOLES = 5;
const useStore = () => {
    const [state, setState] = useState({
        score: 0,
        time: GAME_DURATION,
        started: false,
        holes: new Array(NUMBER_OF_HOLES).fill(null),
        cursorPosition: { x: 0, y: 0 },
        isActive: false
      });

  // פונקציות לעדכון ה-state
  const actions = {
    startGame: () => {
      setState(prevState => ({
        ...prevState,
        started: true
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