import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Login from "./routes/Login";
// import useAuth from "./utils/useAuth";

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100vw",
  },
};

const App = () => {
  // const {
  //   isLoggedIn,
  //   logout,
  //   login: performLogin,
  //   user,
  // } = useAuth("http://192.168.137.1:8080/api");

  const isLoggedIn = true;
  const logout = async () => {};
  const performLogin = async () => {};
  const user = {
    username: "Fahm Ali",
    password: "hello",
    role: "Web Developer",
    accessToken: "access",
  };

  const handleLogin = async (username, password) => {
    console.log(`UserName: ${username} | Password: ${password}  ==> App`);
    await performLogin(username, password);
  };

  const handleUserLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return isLoggedIn ? (
    <div style={styles.appContainer}>
      <SideBar onLogout={handleUserLogout} user={user} />
      <Main user={user} />
    </div>
  ) : (
    <Login onLogin={handleLogin} />
  );
};

export default App;
