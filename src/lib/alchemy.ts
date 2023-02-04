import { Alchemy, Network } from 'alchemy-sdk';

export interface AlchemyApiArgs {
  apiKey: string;
  contractAddress: string;
}

export type { Nft } from 'alchemy-sdk';

/**
 * Get the NFTs associated with the BAYC contract address.
 * @param {string} apiKey - alchemy api key
 * @param {string} contractAddress - BAYC contract address
 * @param {string} [pageKey] - the page key to use for pagination
 * @param {string} [pageSize] - size of paginated requests
 * @returns {Promise<NftContractNftsResponse>} - the NFTs for the given contract
 */
export const getBaycNfts = async ({
  apiKey,
  contractAddress,
  pageKey,
  pageSize
}: {
  apiKey: string;
  contractAddress: string;
  pageKey?: string;
  pageSize?: number;
}) => {
  const alchemy = new Alchemy({ apiKey, network: Network.ETH_MAINNET });
  return alchemy.nft.getNftsForContract(contractAddress, {
    pageSize,
    pageKey
  });
};
