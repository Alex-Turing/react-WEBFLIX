import styled from 'styled-components';

const StyledContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        color: #fff;
        font-size: 3.5rem;
    }
    p {
        color: #fff;
    }
`;

const FormHeader = () => {
    return(
        <StyledContainer>
            <h1>
                NEW VIDEO
            </h1>
            <p>
                COMPLETE THE VIDEO TO CREATE A NEW VIDEO CARD
            </p>
        </StyledContainer>
    );
};

export default FormHeader;