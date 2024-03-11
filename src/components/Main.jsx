/* eslint-disable react/prop-types */
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "../routes/Home";
import Notes from "../routes/Notes";
import Saved from "../routes/Saved";
import Folders from "../routes/Folders";
import Profile from "../routes/Profile";
import Favorites from "../routes/Favorites";
import styled from "styled-components";

const Main = ({ user }) => {
  return (
    <StyledMain>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/notes" element={<Notes />} />
        <Route path="/folders" element={<Folders />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
      <Outlet />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  flex: 1;
  overflow: auto;

  @media (max-width: 600px) {
    margin-bottom: 60px;
  }
`;

export default Main;
