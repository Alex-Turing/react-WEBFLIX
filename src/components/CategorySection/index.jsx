import styled from "styled-components";
import VideoCard from "../VideoCard";


const StyledSection = styled.section`
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    margin: 10px 0;
    justify-content: space-around;
    background-color: ${props => {
        const color = props.$color || '#000'; 
        const [r, g, b] = color.match(/\d+/g) || [0, 0, 0];
        return `rgba(${r}, ${g}, ${b}, 0.7)`; 
    }};
`;

const StyledTitle = styled.h1`
    color: #fff;
    margin-bottom: 0.1rem;
    padding: 20px 20px;
    background-color:${(props) => props.$color || 'white'};
    border-radius: 10px;
    display: inline-block;
    width: 220px;
    text-align: center;
`;

const CategorySection = (props) => {
    const { genre, color, video, deleteCardVideo, onEditClick, handleVideoClick } = props;
    return (
        <>
            <StyledTitle $color={color}>{genre}</StyledTitle>
            <StyledSection $color={color}>
                {video.map(((trailer, index) => 
                    <VideoCard 
                        key={trailer.id || index} 
                        video={trailer} 
                        deleteCardVideo={deleteCardVideo}
                        onEditClick={onEditClick}
                        handleVideoClick={handleVideoClick}
                    />))
                }
            </StyledSection>
        </>
    );
};

export default CategorySection;