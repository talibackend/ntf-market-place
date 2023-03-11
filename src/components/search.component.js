import { SearchOutlined } from "@mui/icons-material"

export const SearchComponent = ({searchHandler})=>{
    return <div className="search-wrapper">
        <div className="search-border-container">
            <div className="search-container">
                <div>
                    <SearchOutlined />
                </div>
                <div className="search-input-wrapper">
                    <input placeholder="Search" onChange={(e)=>{ return searchHandler(e.target.value); }} />
                </div>
            </div>
        </div>
    </div>
}