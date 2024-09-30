import { useState } from "react";

export function useEffectCustom(callback, dependencies) {
    const [state, setState] = useState({
      isFirstRender: true,
      prevDeps: null
    });
  
    const runEffect = () => {
      setState(prevState => ({ ...prevState}));
    };
  
    const depsChanged = (prevDeps, nextDeps) => {
      if (prevDeps === null) return true;
      return nextDeps.some((dep, i) => !Object.is(dep, prevDeps[i]));
    };
  
    if (state.isFirstRender || depsChanged(state.prevDeps, dependencies)) {
      runEffect();
      setState(prevState => ({
        ...prevState,
        isFirstRender: false,
        prevDeps: dependencies,
      }));
    }
  
    // פונקציה לאילוץ הפעלת האפקט
    const forceRunEffect = () => {
      runEffect();
      setState(prevState => ({
        ...prevState,
        prevDeps: dependencies,
      }));
    };
  
    return forceRunEffect;
  }