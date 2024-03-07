/* eslint-disable react/prop-types */
import styled from "styled-components";
import FeatherIcon from "feather-icons-react";

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const InputField = styled.input`
  outline: none;
  padding: 10px 40px;
  border-radius: 20px;
  border: 2px solid #ccc;
  font-size: 16px;
  width: 100%;

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  cursor: pointer;
`;

const Icon = styled(FeatherIcon)`
  width: 18px;
  height: 18px;
`;

const InputFieldWithIcon = ({ icon, inputType, placeholder, onIconClick }) => {
  return (
    <InputContainer>
      <InputField type={inputType} placeholder={placeholder} />
      {icon && (
        <IconContainer onClick={onIconClick}>
          <Icon icon={icon} size={18} />
        </IconContainer>
      )}
    </InputContainer>
  );
};

export default InputFieldWithIcon;
