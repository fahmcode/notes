/* eslint-disable react/prop-types */
import styled from "styled-components";
import ProfileImage from "../assets/avatar.jpg";
import { NavLink } from "react-router-dom";

const ProfileContainer = styled.li`
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

  border: 1px solid #ccc;
  border-radius: 0.75rem;

  @media (max-width: 600px) {
    border-radius: 2rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  height: 35px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #ccc;
  margin: 5px;
  @media (max-width: 600px) {
    margin: 0;
  }
`;

const StyledSpan = styled.span`
  font-weight: 600;

  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;

  @media (max-width: 600px) {
    span {
      display: none;
    }
  }
`;

const MyProfile = ({ user }) => {
  return (
    <ProfileContainer>
      <StyledNavLink to="/profile">
        <ImageContainer>
          <StyledImage src={ProfileImage} alt="Profile" />
        </ImageContainer>
        <StyledSpan>{user.username}</StyledSpan>
      </StyledNavLink>
    </ProfileContainer>
  );
};

export default MyProfile;
