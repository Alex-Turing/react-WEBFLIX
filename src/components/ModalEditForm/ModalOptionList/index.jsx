import { CgOpenCollective } from "react-icons/cg";
import styled from "styled-components";

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    label {
        color: #fff;
    }
`;

const StyledSelect = styled.select`
    background-color: transparent;
    color: rgb(84, 91, 106);
    border: rgb(34, 113, 209) 2px solid;
    border-radius: 5px;
    padding: 8px 2px;
`;

const ModalOptionList = (props) => {

    const { movieGenre, actualGenre } = props;

    return (
        <StyledInputContainer>
            <label>Category:</label>
            <StyledSelect value={actualGenre}>
                <option value="" disabled>Select a Category</option>
                { movieGenre.map((category, index) => 
                    <option key={index} 
                            value={category.genre}>
                                {category.genre}
                    </option>
                )} 
            </StyledSelect>
        </StyledInputContainer>
    );
};

export default ModalOptionList;