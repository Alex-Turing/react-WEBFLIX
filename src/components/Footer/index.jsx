import { styled } from 'styled-components';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 100px;
	background-color: #04244F;
	padding: 22px;
	box-sizing: border-box;
`;

const IconContainer = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	li {
    	display: inline-block;
    	margin-right: 32px;
	}
`;

const TextFooter = styled.p`
	font-size: 16px;
	color: white;
	margin: 0;
`;

const StyledLinkedinIcon = styled(FaLinkedin)`
    color: white;
    font-size: 2.5rem;
`;

const StyledGithubIcon = styled(FaGithub)`
    color: white;
    font-size: 2.5rem;
`;

const StyledMailIcon = styled(SiGmail)`
    color: white;
    font-size: 2.5rem;
`;

function Footer() {
	return (
    	<StyledFooter>
        	<IconContainer>
            	<li>
                	<a href="https://www.linkedin.com/in/alexander-hernandez-software-developer">
                    	<StyledLinkedinIcon />
                	</a>
            	</li>
            	<li>
                	<a href="https://github.com/Alex-Turing">
                    	<StyledGithubIcon />
                	</a>
            	</li>
            	<li>
                	<a href="mailto:alexanderhernandez0684@gmail.com">
                    	<StyledMailIcon />
                	</a>
            	</li>
        	</IconContainer>
        	<TextFooter>Developed By Alexander Hernandez</TextFooter>
    	</StyledFooter>
	);
}

export default Footer