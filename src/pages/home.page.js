import { TopBannerComponent } from "../components/top_banner.component";
import { MainComponent } from "../components/main.component";

export const HomeScreen = ()=>{
    return <div className="body-wrapper">
        <TopBannerComponent />
        <MainComponent />
        <p>Hello world...</p>
    </div>;
}