import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { Nft } from 'alchemy-sdk';

import Card from '~/components/common/Card';
import { NFTCard } from '~/components/nfts/NftCard';
import NftGalleryList from '~/components/nfts/NftGalleryList';
import useNftGallery from '~/hooks/useNftGallery';
import { AlchemyApiArgs, getBaycNfts } from '~/lib/alchemy';

export async function getServerSideProps() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: Number.POSITIVE_INFINITY,
				retry: 1,
				refetchOnMount: false,
				refetchOnReconnect: false,
				refetchOnWindowFocus: false
			}
		}
	});
	const apiKey = process.env.ALCHEMY_API_KEY ?? '';
	const contractAddress = process.env.BAYC_CONTRACT_ADDRESS ?? '';

	await queryClient.prefetchInfiniteQuery(
		['getBaycNfts'],
		() =>
			getBaycNfts({
				apiKey,
				contractAddress
			}),
		{
			getNextPageParam: ({ pageKey }) => pageKey,
			retry: true
		}
	);
	return {
		props: {
			queryArgs: { apiKey, contractAddress },
			dehydratedState: dehydrate(queryClient)
		}
	};
}

const Index = ({ queryArgs }: { queryArgs: AlchemyApiArgs }) => {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useNftGallery(queryArgs);

	const nfts = data?.pages.reduce<Nft[]>(
		(result, page) => result.concat(page.nfts),
		[]
	);

	return (
		<>
			<NftGalleryList
				nfts={nfts}
				hasMore={hasNextPage}
				isFetching={isFetchingNextPage}
				fetchNfts={fetchNextPage}
			>
				{nft => (nft ? <NFTCard nft={nft} /> : <Card.Loader />)}
			</NftGalleryList>
		</>
	);
};

export default Index;
