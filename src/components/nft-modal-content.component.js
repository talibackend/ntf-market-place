export const ModalContentComponent = ({nft}) => {
    return <div className="modal-content-container">
        <div className="nft-modal-image">
            <img alt="Modal NFT" src={nft.image} />
        </div>
        <div className="nft-modal-info">
            <p><h2>{nft.name}</h2></p>
            <p>{nft.price}</p>
            <p><a href={nft.ownerLink} target="__blank">Owner</a></p>
            <p><a href={nft.collectionLink} target="__blank">Collection</a></p>
            <p><a href={nft.verifyLink} target="__blank">Verify</a></p>
            <p><button onClick={()=>{ window.open(nft.link, "__blank") }}>Buy Now</button></p>
        </div>
    </div>;
}