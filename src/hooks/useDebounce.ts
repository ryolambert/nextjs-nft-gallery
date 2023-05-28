import { useEffect, useState } from 'react';

/**
 * A function that takes in a value and a delay and returns a debounced version of the value.
 * @param {any} value - the value to debounce
 * @param {number} [delay=0] - the delay in milliseconds
 * @returns {any} the debounced value
 */
const useDebounce = (value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
