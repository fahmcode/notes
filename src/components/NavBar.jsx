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
`;

const NavItems = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavBar = () => {
  const links = [
    { icon: "home", label: "Home", path: "/" },
    { icon: "book", label: "Notes", path: "/notes" },
    { icon: "folder", label: "Folders", path: "/folders" },
    { icon: "star", label: "Favorites", path: "/favorites" },
    { icon: "bookmark", label: "Saved", path: "/saved" },
    { icon: "settings", label: "Settings", path: "/settings" },
  ];

  return (
    <NavbarContainer>
      <NavItems>
        {links.map((link) => (
          <NavItem key={link.label} link={link} />
        ))}
        <MyProfile />
      </NavItems>
    </NavbarContainer>
  );
};

export default NavBar;
