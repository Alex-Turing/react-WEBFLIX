import { useState } from "react";
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import FormInput from "./FormInput";
import styled from "styled-components";
import OptionList from "../OptionList";
import FormButton from "./FormButton";
import { API_BASE_URL } from '../../apiConfig';

const StyledFormContainer = styled.form`
    width: 80%;
    margin: 0 auto;
    h2 {
        color: #fff;
        border-bottom: rgb(37, 37, 37) 2px solid;
        border-top: rgb(37, 37, 37) 2px solid;
        padding: 15px 0;
        font-size: 2.5rem; 
    }
`;

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 40px;
`;

const Form = (props) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const { categories, setCategories } = props;

    const handleClearSubmit = () => {
        setTitle("");
        setImage("");
        setVideo("");
        setDescription("");
        setCategory("");
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        let videoCardInfo = {
            title: title,
            image: image,
            video: video,
            description: description,
            category: category,
            id: uuid()
        };

        try {
            const response = await axios.post(`${API_BASE_URL}`, videoCardInfo);
        } catch (error) {
            console.error("Error creating video card:", error);
        }
    }

    return (
        <section>
            <StyledFormContainer onSubmit={handleFormSubmit}>
                <h2>Create Card</h2>
                <StyledInputContainer>
                    <FormInput
                        label="Title"
                        placeholder={"Enter the title"}
                        required
                        value={title}
                        setValue={setTitle}
                    />
                    <OptionList
                        categories={categories}
                        setCategory={setCategory}
                        value={category}
                        required
                    />
                </StyledInputContainer>
                <StyledInputContainer>
                    <FormInput
                        label="Image"
                        placeholder={"Enter the image url link"}
                        required
                        value={image}
                        setValue={setImage}
                    />
                    <FormInput
                        label="Video"
                        placeholder={"Enter the video url link"}
                        required
                        value={video}
                        setValue={setVideo}
                    />
                </StyledInputContainer>
                <FormInput
                    label="Description"
                    placeholder={"What is the video about?"}
                    required
                    value={description}
                    setValue={setDescription}
                    type="textarea"
                />
                <StyledButtonContainer>
                    <FormButton name="SAVE" onClick={handleFormSubmit} />
                    <FormButton name="CLEAR" onClick={handleClearSubmit} />
                </StyledButtonContainer>
            </StyledFormContainer>
        </section>
    );
}

export default Form;