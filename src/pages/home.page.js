import { TopBannerComponent } from "../components/top_banner.component";
import { MainComponent } from "../components/main.component";
import { ModalComponent } from "../components/modal.component";
import { useState, useEffect } from 'react';
import data from '../service/nfts.data';

export const HomeScreen = ()=>{
    const [openModal, setOpenModal] = useState(false);
    const [offset, setOffset] = useState(0);
    const limit = 10;
    const [nftList, setNftList] = useState([]);
    const [viewingNft, setViewingNft] = useState(null);
    const [loadingOlderNfts, setLoadingOlderNfts] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);

    const loadNft = ()=>{
        let formerList = [];
        for(let i = offset; i < offset + limit; i++){
            if(i < data.length){
                formerList.push(data[i]);
            }else{
                setAllLoaded(true);
            }
        }
        let newArray = offset === 0 ? formerList : [...nftList, ...formerList];
        setNftList(newArray);
        setLoadingOlderNfts(false);
        console.log(newArray.length);
    }

    const viewNft = (id)=>{
        let foundNft = null;
        console.log(id);

        for(let i = 0; i < nftList.length; i++){
            if(nftList[i].id === id){
                foundNft = nftList[i]
            }
        }
        setViewingNft(foundNft);
        console.log(foundNft);
        setOpenModal(true);
    }
    
    const paginationHandler = ()=>{
        if(loadingOlderNfts === false && allLoaded == false){
            if ((window.innerHeight + window.scrollY) > document.body.offsetHeight) {
                setLoadingOlderNfts(true);
                const loader = setTimeout(()=>{
                    let newOffset = offset + limit;
                    setOffset(newOffset);
                }, 1000);
                return () => clearTimeout(loader);
            }
        }
    }

    document.body.onscroll = ()=>{ return paginationHandler(); }

    useEffect(()=>{ 
        loadNft();
    }, [offset]);

    return <div className="body-wrapper" onScroll={(e)=>{return paginationHandler(e)}}>
        <TopBannerComponent />
        <MainComponent nfts={nftList} loadingOlderNfts={loadingOlderNfts} allLoaded={allLoaded} viewNft={viewNft} />
        { openModal ? <ModalComponent openModal={setOpenModal} nft={viewingNft} /> : null }
    </div>;
}