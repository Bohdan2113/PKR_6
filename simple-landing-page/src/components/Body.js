import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/Yura.jpg"} alt="Yurii Kozenko" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Yurii Kozenko</h2>
          <p style={styles.position}>devOps</p>
        </div>
      </div>

     <div style={styles.card}>
        <img src={"/DSC_7018.jpg"} alt="Kottes Edvin" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Edvin Kottes</h2>
          <p style={styles.position}>QA Engineer</p>
        </div>
      </div>

        <div style={styles.card}>
        <img src={"/Bohdan.jpg"} alt="Bohdan Kruk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Bohdan Kruk</h2>
          <p style={styles.position}>BackEnd</p>
        </div>
      </div>

      <div style={styles.card}>
        <img src={"/bodyamber.jpg"} alt="Bohdan Kostiuk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Bohdan Kostiuk</h2>
          <p style={styles.position}>Scrum Master</p>
        </div>
      </div>

  
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
