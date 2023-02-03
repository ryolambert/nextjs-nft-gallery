import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cl() is a util that concatenates class names together.
 *
 * @param inputs Any number of class names, objects, and arrays of class names.
 * @returns A string of all the class names that are truthy.
 */
export const cl = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};
