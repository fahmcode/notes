/* eslint-disable react/prop-types */
import { useState } from "react";
import BgImage from "../assets/bg3.jpg";
import styled from "styled-components";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${BgImage});
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-position: center;
  color: white;
  padding: 40px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const FormContainer = styled.form`
  max-width: 400px;
  width: 100%;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 0.5rem 0.75rem;
  background-color: #387adf;
  color: white;
  border: 2px solid #387adf;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  transition: background-color 0.3s ease;
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 10px;
  color: #fff;
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

const P = styled.p`
  margin-bottom: 1rem;
`;

const Login = ({ onLogin: handleAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // console.log(`UserName: ${username} | Password: ${password}  ==> Login`);
      await handleAuth(username, password);
    } catch ({ message }) {
      console.error(message);
    }
  };

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <LeftSide>
        <Heading>Notify.</Heading>
        <Description>An App For Your Memory!</Description>
      </LeftSide>
      <RightSide>
        <FormContainer onSubmit={handleSubmit}>
          <h1>Notify.</h1>
          <Title>Welcome Back!</Title>
          <P>Login to continue to your notes.</P>
          <InputField
            type="text"
            placeholder="User name"
            value={username}
            onChange={handleUserNameChange}
          />
          <PasswordField
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit">Log In</Button>
        </FormContainer>
      </RightSide>
    </Container>
  );
};

export default Login;
