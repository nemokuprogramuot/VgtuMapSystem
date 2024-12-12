import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import hooks

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  // Function to handle going back
  const handleBackClick = () => {
    navigate(-1); // Goes back to the previous page in the history stack
  };

  // Conditionally render the back button based on the current route
  const showBackButton = location.pathname !== "/"; // Hide on the home page

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Vilnius Tech Žemėlapis</h1>
      {showBackButton && (
        <button
          onClick={handleBackClick}
          style={styles.backButton}
        >
          Atgal
        </button>
      )}
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
  backButton: {
    backgroundColor: "blue", // Tomato color for the button
    color: "white",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
    borderRadius: "5px",
    position: "absolute", // Positions the back button on the left
    left: "20px", // Adjust this value for spacing from the left edge
  },
};

export default Navbar;