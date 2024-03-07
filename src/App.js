import React from "react"
import './App.css'
import Header from './Components/NoteComponents/Header';
import Notes from "./Components/NoteComponents/Notes";

const  App =() => {
  return (
    <div className="main">
<Header />
<Notes />
    </div>
  );
}

export default App;
