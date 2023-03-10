import { TopBannerComponent } from "../components/top_banner.component";
import { MainComponent } from "../components/main.component";
import { ModalComponent } from "../components/modal.component";
import { useState, useEffect } from 'react';

export const HomeScreen = ()=>{
    const [openModal, setOpenModal] = useState(false);
    const [selectedNft, setSelectedNft] = useState(null);

    return <div className="body-wrapper">
        <TopBannerComponent />
        <MainComponent />
        { openModal ? <ModalComponent /> : null }
    </div>;
}