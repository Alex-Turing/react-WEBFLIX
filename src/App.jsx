import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Home from './pages/Home';
import { GlobalStyles } from "./components/GlobalStyles";
import Header from './components/Header'
import NewVideo from './pages/NewVideo'
import { movieGenres } from './data/movieGenres';
import { API_BASE_URL } from './data/apiConfig';

const GradientBackground = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

const App = () => {
  const [movieGenre, setMovieGenre] = useState(movieGenres);
  const [cardVideo, setCardVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchCardVideo = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}`);
        const videos = response.data;

        if (videos.length > 0) {
          setVideos(videos);
          const randomIndex = Math.floor(Math.random() * videos.length);
          setCardVideo(videos[randomIndex]);
        } else {
          console.warn('No videos available in the response.');
        }
      } catch (error) {
        console.error('Error fetching videos: ', error);
      }
    };
    fetchCardVideo();
  }, []);

  const deleteCardVideo = (id) => {
    const updatedVideos = videos.filter((video) => video.id !== id);
    setVideos(updatedVideos);
  };

  const updateCardVideo = (updatedVideo) => {
    const updatedVideos = videos.map((video) =>
      video.id === updatedVideo.id ? updatedVideo : video
    );
    setVideos(updatedVideos);
  }

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
      <Router>
        <GradientBackground>
          <GlobalStyles />
          <AppContainer>
            <Header />
            <Routes>
              <Route path='/' element={<Home
                movieGenre={movieGenre}
                cardVideo={cardVideo}
                videos={videos}
                deleteCardVideo={deleteCardVideo}
                updateCardVideo={updateCardVideo}
                onEditClick={handleEditClick}
                handleCloseModal={handleCloseModal}
                selectedVideo={selectedVideo}
                isModalOpen={isModalOpen}
              />
              }
              />
              <Route path='newVideo' element={<NewVideo />} />
            </Routes>
          </AppContainer>
        </GradientBackground>
      </Router>
    </>
  )
}

export default App
