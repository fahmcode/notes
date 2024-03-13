/* eslint-disable react/prop-types */
import styled from "styled-components";
import NavItem from "./NavItem";
import MyProfile from "./MyProfile";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    gap: 0;
  }
`;

const NavItems = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 0;
  }
`;

const NavBar = ({ onLogout, user }) => {
  const links = [
    { icon: "home", label: "Home", path: "/" },
    { icon: "book", label: "Notes", path: "/notes" },
    { icon: "star", label: "Favorites", path: "/favorites" },
    { icon: "bell", label: "Notifications", path: "/notifications" },
  ];

  return (
    <NavbarContainer>
      <NavItems>
        {links.map((link) => (
          <NavItem key={link.label} link={link} />
        ))}
        <MyProfile onLogout={onLogout} user={user} />
      </NavItems>
    </NavbarContainer>
  );
};

export default NavBar;
