import { SearchComponent } from "./search.component";
import { CardComponent } from "./card.component";

export const MainComponent = ({nfts, paginationHandler})=>{
    return <>
        <SearchComponent />
        <div className="centralizer">
            <div className="cards-wrapper" onScroll={(e)=>{ return paginationHandler(e); }}>
                {
                    nfts.map((nft)=>{ return <CardComponent key={nft.id} name={nft.name} image={nft.image} price={nft.price} /> })
                }
            </div>
            <div className="loading-older-status">
                Loading Older NFTs...
            </div>
        </div>

    </>;
}