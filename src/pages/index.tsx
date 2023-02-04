import { useState } from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import Card from '~/components/common/Card';
import { NFTCard } from '~/components/nfts/NftCard';
import NftFilter from '~/components/nfts/NftFilter';
import NftGalleryList from '~/components/nfts/NftGalleryList';
import useDebounce from '~/hooks/useDebounce';
import useNftGallery from '~/hooks/useNftGallery';
import { AlchemyApiArgs, getBaycNfts, Nft } from '~/lib/alchemy';

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
  const [filterKey, setFilterKey] = useState<string | undefined>(undefined);
  const debouncedFilterKey = useDebounce(filterKey, 300);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useNftGallery({ filterKey: debouncedFilterKey, ...queryArgs });

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
      <NftFilter
        {...{ ...queryArgs, filterKey: debouncedFilterKey, setFilterKey }}
      />
    </>
  );
};

export default Index;
