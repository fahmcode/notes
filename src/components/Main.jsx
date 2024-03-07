import { Routes, Route, Outlet } from "react-router-dom";

import Home from "../routes/Home";
import Notes from "../routes/Notes";
import Saved from "../routes/Saved";
import Folders from "../routes/Folders";
import Profile from "../routes/Profile";
import Settings from "../routes/Settings";
import Favorites from "../routes/Favorites";

const styles = {
  main: {
    flex: 1,
    padding: "20px",
  },
};

const Main = () => {
  return (
    <div style={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/folders" element={<Folders />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Main;
