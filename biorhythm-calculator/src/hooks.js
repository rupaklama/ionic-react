import { useState } from 'react';

// This custom hook also works as a useState & also saves value to local storage
export const useLocalStorage = (key, defaultValue) => {
  // to get value
  // ?? - nullish operator, if first expression returns null or undefined, use second expression
  const getInitialValue = () => localStorage.getItem(key) ?? defaultValue;
  // NOTE - useState will only call the above Function once when it initializes the value
  // on a initial render, not on every render to make our code efficient

  const [value, setValue] = useState(getInitialValue);

  // to save value
  const setAndStoreValue = newValue => {
    // to update value in the component state
    setValue(newValue);
    // to save value  in local storage
    localStorage.setItem(key, newValue);
  };

  // current value & setter function to update a value
  return [value, setAndStoreValue];
};
