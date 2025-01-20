import styled from "styled-components";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const StyledVideoCard = styled.figure`
    width: 300px;
    max-width: 320px;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
        cursor: pointer;
    }
    figcaption {
        background-color: rgb(25, 25, 25);
        border-radius: 0 0 20px 20px;
        color: #fff;
        padding: 15px;
    }
`;

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    gap: 10px;
    cursor: pointer;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const VideoCard = (props) => {
    const {video, deleteCardVideo, onEditClick, handleVideoClick} = props;
    return (
        <StyledVideoCard>
            <img src={video.image} alt={video.title} onClick={() => handleVideoClick(video)}/>
            <figcaption>
                <StyledFooter>
                    <StyledButtonContainer>
                        <StyledButton onClick={() => deleteCardVideo(video.id)}>
                            <RiDeleteBin6Fill />
                        </StyledButton>
                        <p>DELETE</p>
                    </StyledButtonContainer>
                    <StyledButtonContainer>
                        <StyledButton onClick={() => onEditClick(video)}>
                            <FaEdit />
                        </StyledButton>
                        <p>EDIT</p>
                    </StyledButtonContainer>
                </StyledFooter>
            </figcaption>
        </StyledVideoCard>
    )
};

export default VideoCard;