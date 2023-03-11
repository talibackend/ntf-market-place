
export const CardComponent = (props)=>{
    const {
        id,
        price,
        name, 
        image,
        viewNft
    } = props;
    return <div className="card-container" onClick={()=>{ return viewNft(id); }}>
        <div className="card-image-container">
                <img alt="NFT" src={image} />
        </div>
        <div className="card-info">
            <div className="card-name">
                {name}
            </div>
            <div className="card-price">
                {price}
            </div>
        </div>
    </div>;
}