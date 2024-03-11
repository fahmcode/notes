/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import FeatherIcon from "feather-icons-react";
import InputField from "./InputField";

const StyledIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: #eee;
`;

const PasswordContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const PasswordField = ({ password, placeholder, onChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <PasswordContainer>
      <InputField
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
        value={password}
        onChange={onChange}
      />
      <StyledIcon onClick={handleToggleVisibility}>
        <FeatherIcon icon={isPasswordVisible ? "eye-off" : "eye"} size={18} />
      </StyledIcon>
    </PasswordContainer>
  );
};

export default PasswordField;
