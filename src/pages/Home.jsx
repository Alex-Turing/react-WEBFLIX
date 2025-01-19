import Banner from "../components/Banner";
import CategorySection from "../components/CategorySection";

const Home = (props) => {
    const { movieGenre, cardVideo } = props;
    return (
        <>
            <Banner cardVideo={cardVideo}/>
            {movieGenre.map((genre) =>
                <CategorySection 
                    key={genre.id} 
                    genre={genre.genre} 
                    color={genre.color}
                />
            )}
        </>
    )
};

export default Home;