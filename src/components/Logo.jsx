/* eslint-disable react/prop-types */
import styled from "styled-components";

const Logo = ({ text }) => {
  return <StyledLogo>{text}</StyledLogo>;
};

const StyledLogo = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  font-weight: bold;

  @media (max-width: 600px) {
    display: none;
  }
`;
export default Logo;
