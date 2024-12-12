import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import S1 from './S1';
import S2 from './S2';
import S3 from './S3';
import S4 from './S4';
import S5 from './S5';
import S6 from './S6';





function App() {
  return (
    <div style={styles.app}>
      <Router>
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Main />} /> {/* Use 'element' prop instead of children */}
          <Route path="/S1" element={<S1 />} />
          <Route path="/S2" element={<S2 />} />
          <Route path="/S3" element={<S3 />} />
          <Route path="/S4" element={<S4 />} />
          <Route path="/S5" element={<S5/>} />
          <Route path="/S6" element={<S6 />} />

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