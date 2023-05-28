import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Takes in a list of class values and merges them into a single class string.
 * @param {ClassValue[]} inputs - the list of class values to merge
 * @returns {string} the merged class string
 */
export const cl = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Gets the maximum number of NFTs that can fit in a row.
 * @param {number} rowWidth - the width of the row in pixels
 * @param {number} nftWidth - the width of the NFT in pixels
 * @returns {number} the maximum number of NFTs that can fit in a row.
 */
export function getMaxNftsPerRow(rowWidth: number, nftWidth: number) {
  return Math.max(Math.floor(rowWidth / nftWidth), 1);
}

/**
 * Creates an array of indices for the nfts in a row.
 * @param {number} rowIndex - the index of the row.
 * @param {number} rowWidth - the width of the row.
 * @param {number} nftWidth - the width of the nft.
 * @param {number} nftsAmount - the total amount of nfts.
 * @returns {number[]} - the array of indices for the nfts in a row.
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
 * Get the number of rows needed to display the given amount of NFTs.
 * @param {number} rowWidth - the width of the row in pixels.
 * @param {number} nftWidth - the width of the NFT in pixels.
 * @param {number} nftsAmount - the number of NFTs to display.
 * @param {boolean} hasMore - whether or not there are more NFTs than can fit on a row.
 * @returns {number} the number of rows needed to display the given amount of NFTs.
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
