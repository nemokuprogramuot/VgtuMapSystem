import React from "react";

const Page1 = () => {
  const styles = {
    container: {
      margin: "20px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
    },
    image: {
      maxWidth: "100%",
      marginBottom: "10px",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    subheader: {
      fontSize: "18px",
      marginTop: "10px",
    },
    description: {
      fontSize: "16px",
      marginTop: "10px",
    },
    photo: {
      maxWidth: "100%",
      margin: "20px 0",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>S1 Centriniai rūmai</h1>
      <h3 style={styles.subheader}>SRC</h3>
      <img
        src="/path/to/map-image.png" // Replace with the correct path for the map image
        alt="Map of S1 Centriniai rūmai"
        style={styles.image}
      />
      <p style={styles.description}>
        <strong>Kaip patekti:</strong> Nuo centrinės aikštės (žr. žemėlapyje) pasukti
        kairėn.
      </p>
      <p style={styles.description}>
        <strong>Pagalbinės nuotraukos:</strong>
      </p>
      <img
        src="/path/to/photo1.png"
        alt="Photo 1"
        style={styles.photo}
      />
      <img
        src="/path/to/photo2.png" // Replace with the correct path for photo 2
        alt="Photo 2"
        style={styles.photo}
      />
      <img
        src="/path/to/photo3.png" // Replace with the correct path for photo 3
        alt="Photo 3"
        style={styles.photo}
      />
    </div>
  );
};

export default Page1;