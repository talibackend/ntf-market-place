import { Cancel } from "@mui/icons-material";
import { ModalContentComponent } from "./nft-modal-content.component";

export const ModalComponent = ({nft})=>{
    return <><div className="modal-wrapper"></div>
            <div className="modal-container">
                <div className="cancel-modal-container">
                    <span><Cancel /></span>
                </div>
                <ModalContentComponent nft={nft} />
            </div>
    </>;
}