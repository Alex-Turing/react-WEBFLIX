import styled from "styled-components";

const StyledSection = styled.section`
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    position: relative;
`;

const StyledTitle = styled.h1`
    color: #fff;
    margin-bottom: 0.1rem;
    padding: 20px 20px;
    background-color:${(props) => props.$color || 'white' };
    border-radius: 10px;
    display: inline-block;
    width: 220px;
    text-align: center;
`;

const CategorySection = (props) => {
    const {genre, color} = props;
    return (
        <StyledSection>
            <StyledTitle $color={color}>{genre}</StyledTitle>
        </StyledSection>
    );
};

export default CategorySection;