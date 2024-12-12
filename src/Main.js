import React from "react";
import mainPhoto from "./photos/mainphoto.png";

const Main = () => {
  return (
    <div style={styles.content}>
      <h2>Patobulintas, lengviau suprantamas</h2>
      <div style={styles.imageContainer}> {/* Wrap the image and the button inside a container */}
        <img
          src={mainPhoto} // Update with the correct image path
          alt="Vilnius Tech Map"
          style={styles.image}
        />
        <div
          // onClick={handleClick}
          style={styles.button1} // Apply the styles to the button
        >
          {/* The content is empty, but the div will still be clickable */}
        </div>
      </div>
    </div>
  );
};

const styles = {
  content: {
    flex: 1,
    padding: "20px",
    textAlign: "center",
  },
  imageContainer: {
    position: "relative",  // Make the image container relative
    display: "inline-block",  // To contain the image and button together
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginTop: "20px",
  },
  button1: {
    position: "absolute", 
    top: "10%",  
    left: "10%", 
    width: "200px",  
    height: "200px", 
    backgroundColor: "red", 
    border: "2px solid blue", 
    cursor: "pointer", 
    transition: "background-color 0.3s", 
  },
};

export default Main;