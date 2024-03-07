import { useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Login from "./routes/Login";

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100vw",
  },
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }
  return (
    <div style={styles.appContainer}>
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
