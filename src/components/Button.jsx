import styled from "styled-components";

const PrimaryButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  font-size: 1rem;
  border: 2px solid #333;
  font-weight: 600;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;

const SecondaryButtom = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  border: 2px solid #333;
`;

const Button = ({ type, text, onClick }) => {
  if (type === "primary") {
    return <PrimaryButton onClick={onClick}>{text}</PrimaryButton>;
  } else {
    return <SecondaryButtom onClick={onClick}>{text}</SecondaryButtom>;
  }
};

export default Button;
