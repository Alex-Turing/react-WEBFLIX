import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

const StyledOverlay = styled.div`
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const StyledDialog = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(25, 25, 25);
    width: 900px;
    padding: 5px;
    z-index: 1000;
`;

const StyledVideoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
`;

const StyledIFramSection = styled.section`
    width: 50%;
    iframe {
        width: 100%;
        height: 300px;
        border: none;
        border-radius: 8px;
    }
`;

const StyledDescriptionSection = styled.section`
    width: 50%;
    h1 {
        color: white;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    p {
        color: white;
        font-size: 20px;
        line-height: 1.5;
    }
`;

const StyledCloseButton = styled(AiFillCloseCircle)`
    cursor: pointer; 
    color: #fff; 
    position: absolute; 
    top: 15px; 
    right: 15px; 
    font-size: 24px;
`;

const ModalVideoPlay = (props) => {

    const { video, isVideoModalOpen, onClose } = props;

    return (
        <>
            {isVideoModalOpen && <>
                <StyledOverlay>
                    <StyledDialog>
                    <StyledCloseButton onClick={onClose} />
                        <StyledVideoContainer>
                            <StyledIFramSection>
                                <iframe src={video.video}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                                    allowFullScreen />
                            </StyledIFramSection>
                            <StyledDescriptionSection>
                                <h1>{video.title}</h1>
                                <p>{video.description}</p>
                            </StyledDescriptionSection>
                        </StyledVideoContainer>
                    </StyledDialog>
                </StyledOverlay>
            </>
            }
        </>
    );
};

export default ModalVideoPlay;