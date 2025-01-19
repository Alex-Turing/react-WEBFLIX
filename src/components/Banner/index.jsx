import React, { useEffect, useState } from 'react';
import axios from 'axios';
import banner from './banner_img.png';
import { API_BASE_URL } from '../../apiConfig';
import styled from 'styled-components';
import categoryColors from './categoryColors.json';

const BannerContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${banner});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledBannerContent = styled.div`
    display: flex;
    flex-direction: row; 
    width: 90%;
    max-width: 1200px;
    color: #FFF;
    gap: 2rem;
`;

const BannerLeftSection = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        font-size: 1.2rem;
        line-height: 1.5;
    }

    h2 {
        font-size: 2.5rem;
    }
`;

const CategoryHeading = styled.h2`
    color: #fff;
    margin-bottom: 0.1rem;
    padding: 20px 20px;
    background-color:${(props) => categoryColors[props.$category] || 'white' };
    border-radius: 10px;
    display: inline-block;
    width: 220px;
    text-align: center;
`;

const BannerRightSection = styled.section`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledIFrame = styled.iframe`
    width: 100%;
    height: 300px;
    border: none;
    border-radius: 8px;
`;

const Banner = () => {
    const [cardVideo, setCardVideo] = useState(null);

    useEffect(() => {
        const fetchCardVideo = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}`);
                const videos = response.data;
                if (videos.length > 0) {
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

    return (
        <BannerContainer>
            {cardVideo && (
                <StyledBannerContent>
                    <BannerLeftSection>
                        <CategoryHeading $category={cardVideo.category}>
                            {cardVideo.category}
                        </CategoryHeading>
                        <h2>
                            {cardVideo.title}
                        </h2>
                        <p>{cardVideo.description}</p>
                    </BannerLeftSection>
                    <BannerRightSection>
                        <StyledIFrame
                            src={cardVideo.video}
                            title={cardVideo.title}
                            frameBorder="0"
                            allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                            allowFullScreen
                        ></StyledIFrame>
                    </BannerRightSection>
                </StyledBannerContent>
            )}
        </BannerContainer>
    );
};



export default Banner;