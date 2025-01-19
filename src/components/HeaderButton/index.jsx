import styled from "styled-components";

const StyledHeaderButton = styled.button`
    background-color: #000;
    border: ${props => props.$isActive ? "rgb(34, 113, 209) 2px solid" : "#fff solid 2px"};
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.70);
    color: ${props => props.$isActive ? "rgb(34, 113, 209)" : "#fff"};
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

const HeaderButton = (props) => {
    const { text, isActive } = props;
    return (
        <StyledHeaderButton $isActive={isActive}>{text}</StyledHeaderButton>
    );
};

export default HeaderButton;