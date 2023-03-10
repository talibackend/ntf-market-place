import { SearchOutlined } from "@mui/icons-material"

export const SearchComponent = ()=>{
    return <div className="search-wrapper">
        <div className="search-border-container">
            <div className="search-container">
                <div>
                    <SearchOutlined />
                </div>
                <div className="search-input-wrapper">
                    <input placeholder="Search" />
                </div>
            </div>
        </div>
    </div>
}