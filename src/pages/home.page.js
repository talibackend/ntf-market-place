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
    const [searchString, setSearchString] = useState(null);

    const loadNft = ()=>{
        let formerList = [];
        for(let i = offset; i < offset + limit; i++){
            if(i < data.length){
                if(searchString !== null && searchString !== ""){
                    if(data[i].name.toLowerCase().includes(searchString.toLowerCase())){
                        formerList.push(data[i]);
                    }
                }else{
                    formerList.push(data[i]);
                }
            }else{
                setAllLoaded(true);
            }
        }
        let newArray = offset === 0 ? formerList : [...nftList, ...formerList];
        setNftList(newArray);
        setLoadingOlderNfts(false);
    }

    const viewNft = (id)=>{
        let foundNft = null;

        for(let i = 0; i < nftList.length; i++){
            if(nftList[i].id === id){
                foundNft = nftList[i]
            }
        }
        setViewingNft(foundNft);
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
        console.log(searchString);
        loadNft();
    }, [offset, searchString]);

    return <div className="body-wrapper" onScroll={(e)=>{return paginationHandler(e)}}>
        <TopBannerComponent />
        <MainComponent searchHandler={setSearchString} nfts={nftList} loadingOlderNfts={loadingOlderNfts} allLoaded={allLoaded} viewNft={viewNft} />
        { openModal ? <ModalComponent openModal={setOpenModal} nft={viewingNft} /> : null }
    </div>;
}