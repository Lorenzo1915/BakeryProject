import HomeCarousel from "../Slider/Slider";

import RecipesCards from "../RecipesCard/RecipesCards";
const Home = () => {
    
    
    return (
        <div > 
            <div>
            <HomeCarousel/>
            </div>
            <div id="cards">
                <RecipesCards/>
            </div>
        </div>

    );
}

export default Home;