import { useState } from "react";
import Banner from "../components/Banner";
import CategorySection from "../components/CategorySection";
import ModalEditForm from "../components/ModalEditForm";

const Home = (props) => {
    const { movieGenre, videos, cardVideo, deleteCardVideo, updateCardVideo } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleEditClick = (video) => {
        setIsModalOpen(true);
        setSelectedVideo(video);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedVideo(null);
    };

    return (
        <>
            <Banner cardVideo={cardVideo}/>
            {movieGenre.map((genre) =>
                <CategorySection 
                    key={genre.id} 
                    genre={genre.genre} 
                    color={genre.color}
                    video={videos.filter(video => video.category === genre.genre)}
                    deleteCardVideo={deleteCardVideo}
                    onEditClick={handleEditClick}
                />
            )}
            <ModalEditForm 
                isModalOpen={isModalOpen}
                video={selectedVideo}
                onClose={handleCloseModal}
                movieGenre={movieGenre}
                onUpdate={updateCardVideo}
            />
        </>
    )
};

export default Home;