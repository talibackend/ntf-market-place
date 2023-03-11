import { SearchComponent } from "./search.component";
import { CardComponent } from "./card.component";

export const MainComponent = ({ nfts, allLoaded, loadingOlderNfts, viewNft, searchHandler }) => {
    return <>
        <SearchComponent searchHandler={searchHandler} />
        <div className="centralizer">
            <div className="cards-wrapper">
                {
                    nfts.map((nft) => { return <CardComponent key={nft.id} id={nft.id} name={nft.name} image={nft.image} price={nft.price} viewNft={viewNft} /> })
                }
            </div>
            {
                loadingOlderNfts ? <div className="loading-older-status">
                    Loading Older NFTs...
                </div> : null
            }
            {
                allLoaded ? <div className="loading-older-status">
                    No Older NFT available
                </div> : null
            }

        </div>

    </>;
}