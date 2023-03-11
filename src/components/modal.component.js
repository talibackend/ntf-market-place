import { Cancel } from "@mui/icons-material";
import { ModalContentComponent } from "./nft-modal-content.component";

export const ModalComponent = ({nft, openModal})=>{
    return <><div className="modal-wrapper" onClick={()=>{ return openModal(false) }}></div>
            <div className="modal-container">
                <div className="cancel-modal-container">
                    <span onClick={()=>{ return openModal(false) }}><Cancel /></span>
                </div>
                <ModalContentComponent nft={nft} />
            </div>
    </>;
}