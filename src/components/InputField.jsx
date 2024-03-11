/* eslint-disable react/prop-types */
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 0.5rem 0.75rem;
  width: 100%;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  background-color: #eee;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #387adf;
  }

  &:focus {
    border-color: #387adf;
  }

  &.error {
    border-color: #d32f2f;
  }
`;

const InputField = ({ type, value, onChange, placeholder }) => {
  return (
    <InputContainer>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default InputField;
