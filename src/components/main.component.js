import { SearchComponent } from "./search.component";
import { CardComponent } from "./card.component";

export const MainComponent = ()=>{
    return <>
        <SearchComponent />
        <div className="centralizer">
            <div className="cards-wrapper">
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
        </div>
    </>;
}