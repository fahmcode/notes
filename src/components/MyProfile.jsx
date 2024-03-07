import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import ProfileImage from "../assets/bg3.jpg";
import FeatherIcon from "feather-icons-react";

const ProfileContainer = styled.li`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #e2dfd2;
  }
  &:focus-within {
    background-color: #e2dfd2;
  }

  &.active {
    background-color: #e2dfd2;
    font-weight: bold;
  }
  border-radius: 0.75rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HiddenDiv = styled.div`
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  position: absolute;
  width: 100%;
  bottom: calc(100% + 5px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 0.75rem;
  background-color: #e0e0e0;
  flex-direction: column;
  gap: 5px;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  height: 35px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #ccc;
  margin: 5px;
`;

const StyledSpan = styled.span`
  font-weight: 600;
`;

const IconedButton = styled.button`
  outline: none;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: none;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  color: inherit;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 0.75rem;
`;

const MyProfile = () => {
  const [isHidden, setIsHidden] = useState(true);
  const profileRef = useRef(null);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsHidden(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <ProfileContainer ref={profileRef} onClick={toggleVisibility}>
      <ImageContainer>
        <StyledImage src={ProfileImage} alt="User Profile" />
      </ImageContainer>
      <StyledSpan>Fahm Aliyi</StyledSpan>

      <HiddenDiv isHidden={isHidden}>
        <NavItem link={{ icon: "user", label: "Profile", path: "/profile" }} />
        <IconedButton>
          <FeatherIcon icon="log-out" size="20" />
          <span style={{ marginLeft: 10, fontSize: 16 }}>Logout</span>
        </IconedButton>
      </HiddenDiv>
    </ProfileContainer>
  );
};

export default MyProfile;
