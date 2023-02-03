import type { Nft } from 'alchemy-sdk';

import Card from '~/components/common/Card';

export const NFTCard = ({ nft }: { nft: Nft }) => {
	return (
		<Card className=''>
			<Card.Media
				alt={`${nft.contract.openSea?.collectionName}-${nft.tokenId}`}
				src={nft.media[0]?.gateway}
			/>
			<Card.Footer
				{...{
					collectionName: nft.contract.openSea?.collectionName,
					contractAddress: nft.contract.address,
					title: nft.contract.symbol ?? nft.contract.name,
					tokenId: nft.tokenId
				}}
			/>
		</Card>
	);
};
