import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Vilnius Tech Žemėlapis</h1>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#1E90FF", // Blue background
    padding: "10px 20px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  title: {
    margin: 0,
  },
};

export default Navbar;