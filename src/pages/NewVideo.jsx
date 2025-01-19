import { useState } from "react";
import styled from "styled-components";
import FormHeader from "../components/Form/FormHeader";
import Form from "../components/Form";
import {v4 as uuid} from 'uuid';

const Background = styled.div`
    background-color: rgb(25, 25, 25);
    width: 100%;
    min-height: 100vh;
`;

const NewVideo = () => {
    const [categories, setCategories] = useState([
            {
                id: uuid(),
                category: "Action"
            },
            {
                id: uuid(),
                category: "Drama"
            },
            {
                id: uuid(),
                category: "Animation"
            },
            {
                id: uuid(),
                category: "Science Fiction"
            },
            {
                id: uuid(),
                category: "Fantasy"
            }
        ]
    );

    return (
        <Background>
            <FormHeader />
            <Form categories={categories.map((category) => category.category)} setCategories={setCategories} />
        </Background>

    );
};

export default NewVideo;