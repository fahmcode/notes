/* eslint-disable react/prop-types */
import styled from "styled-components";
import FeatherIcon from "feather-icons-react";

const StyledIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eee;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled(FeatherIcon)`
  font-size: 18px;
  color: inherit;
`;

const IconButton = ({ onClick, icon }) => {
  return (
    <StyledIconButton onClick={onClick}>
      <StyledIcon icon={icon} />
    </StyledIconButton>
  );
};

export default IconButton;
