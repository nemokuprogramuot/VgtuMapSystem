import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import Page1 from './Page1';

function App() {
  return (
    <div style={styles.app}>
      <Router>
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Main />} /> {/* Use 'element' prop instead of children */}
          <Route path="/page1" element={<Page1 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    position: "relative",
    paddingBottom: "40px", 
    display: "flex",
    flexDirection: "column",
  },
};

export default App;