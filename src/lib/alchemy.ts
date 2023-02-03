import { Alchemy, Network } from 'alchemy-sdk';

export interface AlchemyApiArgs {
	apiKey: string;
	contractAddress: string;
}

/**
 * Get the NFTs associated with the BAYC contract address.
 * @param {string} apiKey - alchemy api key
 * @param {string} contractAddress - BAYC contract address
 * @param {string} [pageKey] - the page key to use for pagination
 * @returns {Promise<NftContractNftsResponse>} - the NFTs for the given contract
 */
export const getBaycNfts = async ({
	apiKey,
	contractAddress,
	pageKey
}: {
	apiKey: string;
	contractAddress: string;
	pageKey?: string;
}) => {
	const alchemy = new Alchemy({ apiKey, network: Network.ETH_MAINNET });
	return alchemy.nft.getNftsForContract(contractAddress, {
		pageKey
	});
};
