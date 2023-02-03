/* eslint-disable import/no-extraneous-dependencies */
import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';
import {
	AutoSizer as _AutoSizer,
	AutoSizerProps,
	IndexRange,
	InfiniteLoader as _InfiniteLoader,
	InfiniteLoaderProps,
	List as _List,
	ListProps,
	WindowScroller as _WindowScroller,
	WindowScrollerProps
} from 'react-virtualized';

import ProgressLoader from '~/components/common/ProgressLoader';
import { createRowIndices, getRowQuantity } from '~/lib/utils';

// Had to typecast react-virtualized due to next.js typescript issues
// @see https://github.com/bvaughn/react-virtualized/issues/1739
const AutoSizer = _AutoSizer as unknown as FC<AutoSizerProps>;
const InfiniteLoader = _InfiniteLoader as unknown as FC<InfiniteLoaderProps>;
const List = _List as unknown as FC<ListProps>;
const WindowScroller = _WindowScroller as unknown as FC<WindowScrollerProps>;

type NftRenderer<Nft> = (nft?: Nft) => React.ReactNode;

interface NftGalleryListProps<Nft> {
	nfts?: Nft[];
	fetchNfts?: Function;
	hasMore?: boolean;
	isFetching?: boolean;
	reset?: boolean;
	nftWidth?: number;
	nftHeight?: number;
	children: NftRenderer<Nft>;
}

function NftGalleryList<Nft>({
	nftWidth = 360,
	nftHeight = 400,
	hasMore = false,
	nfts = [],
	reset = false,
	isFetching = false,
	fetchNfts = () => {},
	children
}: NftGalleryListProps<Nft>) {
	const infiniteLoaderRef = useRef<InfiniteLoaderProps>(null);

	useEffect(() => {
		if (reset && infiniteLoaderRef.current) {
			infiniteLoaderRef.current.resetLoadMoreRowsCache(true);
		}
	}, [reset, infiniteLoaderRef]);

	const loadMoreRows = async (_: IndexRange) => {
		if (!isFetching) {
			fetchNfts();
		}
	};

	const noRowsRenderer = () => (
		<div className='flex justify-center'>
			<h1 className='font-sans text-2xl'>No Nfts Found...</h1>
		</div>
	);

	return (
		<section className='mt-20'>
			<AutoSizer disableHeight>
				{({ width: rowWidth }) => {
					const rowCount = getRowQuantity(
						rowWidth,
						nftWidth,
						nfts.length,
						hasMore
					);

					return (
						<InfiniteLoader
							ref={infiniteLoaderRef}
							rowCount={rowCount}
							isRowLoaded={({ index }) => {
								const allNftsLoaded =
									createRowIndices(index, rowWidth, nftWidth, nfts.length)
										.length > 0;

								return !hasMore || allNftsLoaded;
							}}
							loadMoreRows={loadMoreRows}
						>
							{({ onRowsRendered, registerChild }) => (
								<WindowScroller>
									{({ height, scrollTop }) => (
										<List
											className='my-4 justify-center overflow-y-auto scrollbar-thin scrollbar-track-amber-200/50 scrollbar-thumb-amber-500/50 scrollbar-track-rounded-full scrollbar-thumb-rounded-full'
											autoHeight
											ref={registerChild}
											height={height}
											scrollTop={scrollTop}
											width={rowWidth}
											rowCount={rowCount}
											rowHeight={nftHeight}
											onRowsRendered={onRowsRendered}
											rowRenderer={({ index, style, key }) => {
												const nftsForRow = createRowIndices(
													index,
													rowWidth,
													nftWidth,
													nfts.length
												).map(nftIndex => nfts[nftIndex]);

												return (
													<ul
														role='list'
														style={style}
														key={key}
														className='flex justify-center gap-6 py-4'
													>
														{nftsForRow.map((nft, nftIndex) => (
															<li
																className='w-full'
																style={{ width: nftWidth }}
																key={nftIndex}
															>
																{children(nft)}
															</li>
														))}
													</ul>
												);
											}}
											noRowsRenderer={noRowsRenderer}
										/>
									)}
								</WindowScroller>
							)}
						</InfiniteLoader>
					);
				}}
			</AutoSizer>
			{isFetching ? <ProgressLoader /> : null}
		</section>
	);
}

export default NftGalleryList;
