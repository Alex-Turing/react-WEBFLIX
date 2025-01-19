import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #000;
    border: ${(props) => 
        props.$name === "SAVE" 
            ? "rgb(34, 113, 209) 2px solid" 
            : "#fff 2px solid"};
    border-radius: 10px;
    padding: 10px 10px;
    color: #fff;
    width: 180px;
    font-size: 1rem;
    margin-top: 40px;
    font-weight: bold;
`;

const FormButton = (props) => {
    const { name, onClick } = props;
    return (
        <StyledButton onClick={onClick} $name={name}>{name}</StyledButton>
    );
};

export default FormButton;