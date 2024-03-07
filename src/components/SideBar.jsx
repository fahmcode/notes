import Logo from "./Logo";
import NavBar from "./NavBar";

const styles = {
  sidebar: {
    width: "200px",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    borderRight: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
};

const SideBar = () => {
  return (
    <div style={styles.sidebar}>
      <Logo text="Notify" />
      <NavBar />
    </div>
  );
};

export default SideBar;
