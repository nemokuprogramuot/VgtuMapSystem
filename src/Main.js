import React from "react";

const Main = () => {
  return (
    <div style={styles.content}>
      <h2>Patobulintas, lengviau suprantamas</h2>
      <img
        src="/path/to/your/map.png" // Update with the correct image path
        alt="Vilnius Tech Map"
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  content: {
    flex: 1,
    padding: "20px",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginTop: "20px",
  },
};

export default Main;