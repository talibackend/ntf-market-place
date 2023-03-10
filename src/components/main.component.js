import { SearchComponent } from "./search.component";
import { CardComponent } from "./card.component";

export const MainComponent = ({ nfts, allLoaded, searchString, searchingNfts, loadingOlderNfts, viewNft, searchHandler }) => {
    return <>
        <SearchComponent searchString={searchString} searchHandler={searchHandler} />
        <div className="centralizer">
            {
                searchingNfts ? <div className="loading-older-status">
                    Searching Nfts
                </div> : null
            }
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