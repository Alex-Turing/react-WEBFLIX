import styled from "styled-components";

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    label {
        color: #fff;
        margin-bottom: 10px;
    }
`;

const StyledSelect = styled.select`
    padding: 10px;
    border: rgb(37, 37, 37) 2px solid;
    background-color: rgb(25, 25, 25);
    color: #fff;
    border-radius: 5px;
    padding: 8px 10px;
    margin-bottom: 10px;
`;

const OptionList = (props) => {

    const { categories, setCategory, value } = props;

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <StyledInputContainer>
            <label>Equipo</label>
            <StyledSelect value={value} onChange={handleChange}>
                <option value="" disabled defaultValue="" hidden>Select a category</option>
                { categories.map((category, index) => <option key={index} value={category}>{category}</option>)} 
            </StyledSelect>
        </StyledInputContainer>
    );
};

export default OptionList;