import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import FetchApp from "./FetchApp/FetchApp";
import NoteApp from "./NoteApp/NoteApp";
import Header from "./Header";

const App = () => {
 
return (
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<NoteApp />} />

          <Route path="notes" element={<NoteApp />} />

          <Route path="fetch" element={<FetchApp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
