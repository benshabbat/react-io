let state;

export function stateCustom(initialValue) {
  if (state === undefined) {
    state = initialValue;
  }
  const setState = (newValue) => {
    if (typeof newValue === "function") {
      state = newValue(state);
    } else {
      state = newValue;
    }
  };
  return [state, setState];
}

