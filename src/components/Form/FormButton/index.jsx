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
    font-weight: bold;
    cursor: pointer;
    &:hover {
        box-shadow: ${props => props.$name === 'SAVE'
            ? "0px 5px 29px 0px rgba(34, 113, 209, 0.70)"
            : "0px 5px 29px 0px rgba(255, 255, 255, 0.70)"};
    }
`;

const FormButton = (props) => {
    const { name, onClick } = props;
    return (
        <StyledButton onClick={onClick} $name={name}>{name}</StyledButton>
    );
};

export default FormButton;