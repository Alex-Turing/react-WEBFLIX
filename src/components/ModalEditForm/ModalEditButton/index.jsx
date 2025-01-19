import styled from "styled-components";

const StyledModalEditButton = styled.button`
    margin: 20px 20px 20px 0;
    background-color: #000;
    border: rgb(34, 113, 209) 2px solid;
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.70);
    color: rgb(34, 113, 209);
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: rgb(34, 113, 209); 
        border-color: #fff; 
        box-shadow: 0px 5px 29px 0px #fff;
        color: #fff;
    }
`;

const ModalEditButton = (props) => {
    const { text } = props;
    return (
        <StyledModalEditButton>{text}</StyledModalEditButton>
    );
};

export default ModalEditButton;