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

/**
 * Calculate the maximum number of NFTs that can fit in a row of a given width,
 * given the width of each NFT.
 *
 * @param rowWidth - The width of the row, in pixels.
 * @param nftWidth - The width of each NFT, in pixels.
 */

export function getMaxNftsPerRow(rowWidth: number, nftWidth: number) {
	return Math.max(Math.floor(rowWidth / nftWidth), 1);
}

/**
 * Generates the indexes for the nft cards in a given row.
 * @param rowIndex The index of the row
 * @param rowWidth The width of the row
 * @param nftWidth The width of the nft cards
 * @param nftsAmount The total amount of nfts
 */
export function createRowIndices(
	rowIndex: number,
	rowWidth: number,
	nftWidth: number,
	nftsAmount: number
) {
	const result = [];
	const maxNftsPerRow = getMaxNftsPerRow(rowWidth, nftWidth);
	const startIndex = rowIndex * maxNftsPerRow;

	for (
		let i = startIndex;
		i < Math.min(startIndex + maxNftsPerRow, nftsAmount);
		i += 1
	) {
		result.push(i);
	}

	return result;
}

/**
 * Returns the amount of rows needed to display a number of NFTs.
 * @param rowWidth The width of the row in pixels.
 * @param nftWidth The width of the NFT in pixels.
 * @param nftsAmount The number of NFTs to display.
 * @param hasMore Whether or not more NFTs will be added to the row.
 * @returns The amount of rows needed to display a number of NFTs.
 */
export function getRowQuantity(
	rowWidth: number,
	nftWidth: number,
	nftsAmount: number,
	hasMore: boolean
) {
	const maxNftsPerRow = getMaxNftsPerRow(rowWidth, nftWidth);

	return Math.ceil(nftsAmount / maxNftsPerRow) + (hasMore ? 1 : 0);
}
