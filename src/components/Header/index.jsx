import styled from "styled-components";
import HeaderButton from "../HeaderButton";
import logo from './LogoMain.png'
import { Link, useLocation } from 'react-router-dom';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 20px;
    border-bottom: rgb(34, 113, 209) 4px solid;
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.70);
`;

const StyledLogo = styled.img`
    width: 212px;
`;

const StyledButtonContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
`;

const Header = () => {
    const location = useLocation();
    
    return (
        <StyledHeader>
            <StyledLogo src={logo} alt="logo AluraFlix" />
            <StyledButtonContainer>
                <Link className="menu-item" to="/">
                    <HeaderButton text="HOME" isActive={location.pathname === '/'} />
                </Link>
                <Link className="menu-item" to="/newVideo">
                    <HeaderButton text="NEW VIDEO" isActive={location.pathname === '/newVideo'} />
                </Link>
            </StyledButtonContainer>
        </StyledHeader>
    )
};

export default Header;