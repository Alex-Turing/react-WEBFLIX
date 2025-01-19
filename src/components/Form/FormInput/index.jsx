import styled from "styled-components";

const StyledInput = styled.input`
    border: rgb(37, 37, 37) 2px solid;
    background-color: rgb(25, 25, 25);
    color: #fff;
    border-radius: 5px;
    padding: 8px 10px;
    margin-bottom: 10px;
`;

const StyledTextarea = styled.textarea`
    border: rgb(37, 37, 37) 2px solid;
    background-color: rgb(25, 25, 25);
    color: #fff;
    border-radius: 5px;
    padding: 8px 10px;
    margin-bottom: 10px;
    resize: none; 
`;

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    label {
        color: #fff;
        margin-bottom: 10px;
    }
`;

const FormInput = (props) => {

    const { label, placeholder, required, value, setValue, type = "text" } = props

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <StyledInputContainer>
            <label>{label}</label>
            {type === 'textarea' ? (
                <StyledTextarea
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    rows={6}
                    onChange={handleChange}
                />
            ) : (
                <StyledInput
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={handleChange}
                    type={type}
                />
            )}
        </StyledInputContainer>
    );
};

export default FormInput;