import type {
	QueryFunctionContext,
	UseInfiniteQueryOptions
} from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { NftContractNftsResponse } from 'alchemy-sdk';

import { AlchemyApiArgs, getBaycNfts } from '~/lib/alchemy';

interface UseGalleryArgs extends AlchemyApiArgs {}

const useNftGallery = (
	{ apiKey, contractAddress }: UseGalleryArgs,
	options?: UseInfiniteQueryOptions<NftContractNftsResponse>
) => {
	const queryKey = 'getByacNfts';

	const getPageKey = (pageParam?: Pick<QueryFunctionContext, 'pageParam'>) => {
		return pageParam ? `${pageParam}` : undefined;
	};
	const galleryQuery = useInfiniteQuery<NftContractNftsResponse>(
		[queryKey],
		({ pageParam }) =>
			getBaycNfts({
				apiKey,
				contractAddress,
				pageKey: getPageKey(pageParam)
			}),
		{
			getNextPageParam: ({ pageKey }) => pageKey,
			keepPreviousData: true,
			retry: 1,
			...options
		}
	);

	return galleryQuery;
};

export default useNftGallery;
