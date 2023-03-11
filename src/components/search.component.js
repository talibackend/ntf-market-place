import { SearchOutlined } from "@mui/icons-material"

export const SearchComponent = ({searchHandler, searchString})=>{
    return <div className="search-wrapper">
        <div className="search-border-container">
            <div className="search-container">
                <div>
                    <SearchOutlined />
                </div>
                <div className="search-input-wrapper">
                    <input placeholder="Search" value={searchString ? searchString : ""} onChange={(e)=>{ searchHandler(e.target.value); }} />
                </div>
            </div>
        </div>
    </div>
}