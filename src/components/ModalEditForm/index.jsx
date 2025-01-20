import styled from "styled-components";
import ModalOptionList from "./ModalOptionList";
import ModalFormInput from "./ModalFormInput";
import { useEffect, useState } from "react";
import ModalEditButton from "./ModalEditButton";

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
    background-color: rgb(3, 18, 47);
    border: rgb(94, 185, 229) 2px solid;
    border-radius: 20px;
    width: 900px;
    padding: 20px;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
    width: 80%;
    margin: 0 auto;
    h2 {
        color: rgb(34, 113, 209);
        padding: 15px 0;
        font-size: 2.5rem; 
        font-family: "GandhiSansBold", sans-serif;
    }
`;

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    label {
        color: #fff;
        padding: 15px 0;
    }
    input, textarea {
        background-color: transparent;
        color: rgb(84, 91, 106);
        border: rgb(34, 113, 209) 2px solid;
        border-radius: 5px;
        padding: 8px 2px;
    }
    textarea {
        resize: none;
    }
`;

const ModalEditForm = (props) => {
    const { isModalOpen, video, onClose, movieGenre, updateCardVideo } = props
    const [formValues, setFormValues] = useState({
        title: '',
        category: '',
        image: '',
        video: '',
        description: '',
    });

    useEffect(() => {
        if(video){
            setFormValues({
                title: video.title || '',
                category: video.category || '',
                image: video.image || '',
                video: video.video || '',
                description: video.description || '',
            });
        }
    },[video]);

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues((preValues) => ({
            ...preValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('formValues inside submit function', formValues)
        const updatedVideo = {...video, ...formValues};
        console.log('updatedVideo: ', updatedVideo);
        updateCardVideo(updatedVideo);
        onClose();
    };

    return (
        <>
            {isModalOpen && <>
            <StyledOverlay>
                <StyledDialog>
                <StyledForm onSubmit={handleSubmit}>
                    <h2>EDIT VIDEO CARD:</h2>
                    {video && (
                        <StyledInputContainer>
                            <ModalFormInput category="Tilte:" value={formValues.title} name="title" onChange={handleChange} />
                            <ModalOptionList movieGenre={movieGenre} actualGenre={formValues.category} name="category" onChange={handleChange} />
                            <ModalFormInput category="Image:" value={formValues.image} name="image" onChange={handleChange}/>
                            <ModalFormInput category="Video:" value={formValues.video} name="video" onChange={handleChange}/> 
                            <label>Description:</label>
                            <textarea rows={6} name="description" value={formValues.description} onChange={handleChange}></textarea>    
                        </StyledInputContainer>
                    )}
                    
                    <ModalEditButton onClick={handleSubmit} text="SAVE" />
                    <ModalEditButton onClick={onClose} text="CLOSE" />
                </StyledForm>
                </StyledDialog>
                </StyledOverlay>
            </>
            }
        </>
    );
};

export default ModalEditForm;