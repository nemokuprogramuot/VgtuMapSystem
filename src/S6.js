import React from "react";
import s1 from "./photos/s6/1.jpg";
import s2 from "./photos/s6/2.jpg";
import s3 from "./photos/s6/3.jpg";
import pradine from "./photos/Startas.jpg"
import zemelapis from "./photos/zemelapiai/S6.png"

const Page1 = () => {
  const styles = {
    container: {
      margin: "20px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column", // Stack items in a column
      alignItems: "center", // Center align items horizontally
      justifyContent: "center", // Center align items vertically
      textAlign: "center", // Center text
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
    photoContainer: {
      display: "flex",
      flexDirection: "column", // Ensure a column layout
      alignItems: "center", // Center images horizontally
      gap: "20px", // Add spacing between the images
    },
    photo: {
      maxWidth: "100%",
      maxHeight: "400px", // Set a uniform height
      objectFit: "cover", // Ensures the image fits within the specified dimensions
      margin: "20px 0",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>S6/S7 Laboratorinis Korpusas</h1>
      <h3 style={styles.subheader}>SRL-I</h3>
      <img
        src= {zemelapis}
        alt="Map of S1 Centriniai rūmai"
        style={styles.image}
      />
      <p style={styles.description}>
        <strong>Kaip patekti:</strong> Nuo centrinės aikštės (žr. žemėlapyje) eiti tiesiai. Užlipus laiptais pasukti kairėn užlipti laiptais, tačiau nelipti aukštyn, o pasukti dešiniau (praeiti po tilteliu, žr. 2 nuotrauką).
      </p>
      <p style={styles.description}>
        <strong>Pagalbinės nuotraukos:</strong>
      </p>
      <div style = {styles.photoContainer}>
      <img
        src = {pradine}
        alt="Photo 1"
        style={styles.photo}
      />
      <img
        src = {s1}
        alt="Photo 1"
        style={styles.photo}
      />
      <img
        src= {s2}
        alt="Photo 2"
        style={styles.photo}
      />
      <img
        src= {s3}
        alt="Photo 3"
        style={styles.photo}
      />
      </div>
    </div>
  );
};

export default Page1;