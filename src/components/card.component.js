
export const CardComponent = (props)=>{
    const {
        name, 
        image,
        link,
        verifyLink
    } = props;
    return <div className="card-container">
        <div className="card-image-container">
                <img alt="NFT" src="https://openseauserdata.com/files/089aa42ae99a59cbe8cdb9b9add578ed.svg" />
        </div>
        <div className="card-info">
            <div className="card-name">
                Test NTF
            </div>
            <div className="card-price">
                ETH 0.15
            </div>
        </div>
    </div>;
}