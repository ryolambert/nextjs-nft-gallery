import { useMemo } from 'react';
import type {
	QueryFunctionContext,
	UseInfiniteQueryOptions
} from '@tanstack/react-query';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import type { NftContractNftsResponse } from 'alchemy-sdk';

import { AlchemyApiArgs, getBaycNfts } from '~/lib/alchemy';

interface UseGalleryArgs extends AlchemyApiArgs {
	filterKey?: string;
}

const useNftGallery = (
	{ apiKey, contractAddress, filterKey }: UseGalleryArgs,
	options?: UseInfiniteQueryOptions<NftContractNftsResponse>
) => {
	const queryKey = 'getByacNfts';
	const memoizedFilterKey = useMemo(() => filterKey, [filterKey]);
	const queryClient = useQueryClient();

	// Removes old queries for filter
	if (memoizedFilterKey !== filterKey) {
		queryClient.removeQueries([queryKey, { memoizedFilterKey }], {
			exact: true
		});
	}

	const getPageKey = (pageParam?: Pick<QueryFunctionContext, 'pageParam'>) => {
		if (memoizedFilterKey) {
			return `${memoizedFilterKey}`;
		}
		return pageParam ? `${pageParam}` : undefined;
	};
	const galleryQuery = useInfiniteQuery<NftContractNftsResponse>(
		[queryKey, { memoizedFilterKey }],
		({ pageParam }) =>
			getBaycNfts({
				apiKey,
				contractAddress,
				pageKey: getPageKey(pageParam),
				pageSize: memoizedFilterKey ? 1 : undefined
			}),
		{
			getNextPageParam: !memoizedFilterKey
				? ({ pageKey }) => pageKey
				: undefined,
			keepPreviousData: !memoizedFilterKey,
			retry: 1,
			...options
		}
	);

	return galleryQuery;
};

export default useNftGallery;
