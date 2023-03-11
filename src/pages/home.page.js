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
    const [loadingOlderNfts, setLoadingOlderNfts] = useState(false);

    const loadNft = ()=>{
        let formerList = [];

        for(let i = offset; i < offset + limit; i++){
            formerList.push(data[i]);
        }
        let newArray = offset === 0 ? formerList : [...nftList, ...formerList];
        setNftList(newArray);
    }

    const viewNft = (id)=>{
        let foundNft = null;

        for(let i = 0; i < data.length; i++){
            if(data[i].id === id){
                foundNft = data[i]
            }
        }

        setViewingNft(foundNft);
    }
    
    const paginationHandler = ()=>{
        if ((window.innerHeight + window.scrollY) > document.body.offsetHeight) {
            
        }
    }

    useEffect(()=>{ 
        loadNft(); 
        let body = document.getElementsByTagName('body')[0];
        body.onscroll = (e)=>{ return paginationHandler(); }
    }, []);

    return <div className="body-wrapper" onScroll={(e)=>{return paginationHandler(e)}}>
        <TopBannerComponent />
        <MainComponent nfts={nftList} loadingOlderNfts={loadingOlderNfts} paginationHandler={paginationHandler} />
        { openModal ? <ModalComponent /> : null }
    </div>;
}