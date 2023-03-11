
export const CardComponent = (props)=>{
    const {
        price,
        name, 
        image
    } = props;
    return <div className="card-container">
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