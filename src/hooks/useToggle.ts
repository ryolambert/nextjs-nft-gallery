import { useCallback, useState } from 'react';

/**
 * A custom hook that returns a boolean state and a function to toggle it.
 * @param {boolean} initialState - the initial state of the toggle.
 * @returns {[boolean, any]} - a tuple containing the state and a function to toggle it.
 */
const useToggle = (initialState: boolean = false): [boolean, any] => {
	// Initialize the state
	const [state, setState] = useState<boolean>(initialState);
	// Define and memorize toggler function in case we pass down the component,
	// This function change the boolean value to it's opposite value
	const toggle = useCallback(
		(): void => setState(currentState => !currentState),
		[]
	);
	return [state, toggle];
};

export { useToggle };
