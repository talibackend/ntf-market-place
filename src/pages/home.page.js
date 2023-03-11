import { TopBannerComponent } from "../components/top_banner.component";
import { MainComponent } from "../components/main.component";
import { ModalComponent } from "../components/modal.component";
import { useState, useEffect } from 'react';
import data from '../service/nfts.data';

export const HomeScreen = ()=>{
    const [openModal, setOpenModal] = useState(false);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);
    const [nftList, setNftList] = useState([]);
    const [viewingNft, setViewingNft] = useState(null);

    const loadNft = (offset=0, limit=10)=>{
        let formerList = [];

        for(let i = offset; i < offset + limit; i++){
            formerList.push(data[i]);
        }
        setNftList([...nftList, ...formerList]);
    }

    const viewNft = (id)=>{
        let foundNft = null;

        for(let i = 0; i < data.length; i++){
            if(data[i].id == id){
                foundNft = data[i]
            }
        }

        setViewingNft(foundNft);
    }

    

    useEffect(()=>{loadNft();}, []);

    return <div className="body-wrapper">
        <TopBannerComponent />
        <MainComponent />
        { openModal ? <ModalComponent /> : null }
    </div>;
}