import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 Vilnius Tech. All Rights Reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1E90FF", // Blue background
    padding: "10px",
    color: "white",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  text: {
    margin: 0,
  },
};

export default Footer;