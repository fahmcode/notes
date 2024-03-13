/* eslint-disable react/prop-types */
import styled from "styled-components";
import Logo from "./Logo";
import NavBar from "./NavBar";

const StyledSideBar = styled.div`
  width: 200px;
  padding: 10px;
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;

  @media (max-width: 600px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
  }
`;

const SideBar = ({ onLogout, user }) => {
  return (
    <StyledSideBar>
      <Logo text="Notify" />
      <NavBar onLogout={onLogout} user={user} />
    </StyledSideBar>
  );
};

export default SideBar;
