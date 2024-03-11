/* eslint-disable react/prop-types */
import styled from "styled-components";
import AvatarImage from "../assets/avatar.jpg";
import BannerImage from "../assets/bg3.jpg";
import Button from "../components/Button";

function Profile({ user }) {
  return (
    <ProfileContainer>
      <ProfileDiv>
        <Avatar>
          <AvatarImg src={AvatarImage} alt="Avatar Image" />
        </Avatar>
        <Banner>
          <BannerImg src={BannerImage} alt="Avatar Image" />
        </Banner>
        <ProfileDetail>
          <ProfileInfo>
            <h3>{user.username}</h3>
            <p>{user.role}</p>
          </ProfileInfo>
          <ProfileAction>
            <Button text="Edit Profile" onClick={() => {}} type="primary" />
            <Button text="Log out" onClick={() => {}} type="secondary" />
          </ProfileAction>
        </ProfileDetail>
      </ProfileDiv>
      <SettingDiv>
        <h2>Settings</h2>
      </SettingDiv>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProfileDiv = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: 6rem 4rem 4rem 1fr;
  grid-template-columns: 1fr;
`;

const SettingDiv = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Avatar = styled.div`
  grid-row: 2 / 4;
  grid-column: 1 / -1;
  padding: 0 24px;
  z-index: 1;
`;

const AvatarImg = styled.img`
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 2px solid #ccc;
`;

const Banner = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / -1;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileDetail = styled.div`
  grid-row: 4 / 5;
  grid-column: 1 / -1;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
`;
const ProfileInfo = styled.div``;
const ProfileAction = styled.div`
  display: flex;
  gap: 1rem;
`;

export default Profile;
