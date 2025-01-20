import React from 'react';
import banner from './banner_img.png';
import styled from 'styled-components';
import categoryColors from '../../data/categoryColors.json';
import { AiFillCloseCircle } from "react-icons/ai";

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

const Banner = (props) => {
    const { cardVideo } = props;

    return (
        <BannerContainer>
            {cardVideo && (
                <StyledBannerContent>
                    <AiFillCloseCircle onClick={() => deleteEmployee()}/>
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