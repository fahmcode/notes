/* eslint-disable react/prop-types */
const Logo = ({ text }) => {
  const styles = {
    logo: {
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
    },
  };

  return <div style={styles.logo}>{text}</div>;
};

export default Logo;
