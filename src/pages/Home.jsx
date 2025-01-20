import { useState } from "react";
import Banner from "../components/Banner";
import CategorySection from "../components/CategorySection";
import ModalEditForm from "../components/ModalEditForm";
import ModalVideoPlay from "../components/ModalVideoPlay";

const Home = (props) => {
    const { movieGenre, videos, cardVideo, deleteCardVideo, updateCardVideo, onEditClick, handleCloseModal, selectedVideo, isModalOpen, isVideoModalOpen, handleVideoClick, handleCloseVideoModal } = props;

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
                    onEditClick={onEditClick}
                    handleVideoClick={handleVideoClick}
                />
            )}
            <ModalEditForm 
                isModalOpen={isModalOpen}
                video={selectedVideo}
                onClose={handleCloseModal}
                movieGenre={movieGenre}
                updateCardVideo={updateCardVideo}
            />
            <ModalVideoPlay 
                video={selectedVideo}
                isVideoModalOpen={isVideoModalOpen}
                onClose={handleCloseVideoModal}
            />
        </>
    )
};

export default Home;