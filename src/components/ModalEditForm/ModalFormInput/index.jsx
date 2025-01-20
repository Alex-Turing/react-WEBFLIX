import styled from "styled-components";

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    label {
        color: #fff;
    }
`;

const StyledInput = styled.input`
    background-color: transparent;
    color: rgb(84, 91, 106);
    border: rgb(34, 113, 209) 2px solid;
    border-radius: 5px;
    padding: 8px 2px;
`; 

const ModalFormInput = (props) => {
    const { category, value, onChange, name } = props;
    return(
        <StyledInputContainer>
            <label>{category}</label>
            <StyledInput name={name} value={value} onChange={onChange}/>
        </StyledInputContainer>
    );
};

export default ModalFormInput;