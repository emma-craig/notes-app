import { v4 as uuid } from "uuid";
import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const textHandler = (e) => setInputText(e.target.value);
  const saveHandler = () => {
    setNotes((prevState) => [...prevState, { id: uuid(), text: inputText }]);
    setInputText("");
  };
  const deleteHandler = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    try {
      localStorage.setItem("Notes", JSON.stringify(notes));
    } catch (error) {
      // silence is a true friend
    }
  }, [notes]);
  useEffect(() => {
    // get stored notes on first render
    try {
      const data = JSON.parse(localStorage.getItem("Notes"));
      if (data) {
        setNotes(data);
      }
    } catch (error) {
      // silence is a true friend
    }
  }, []);
  return (
    <div>
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            deleteHandler={deleteHandler}
          />
        );
      })}
      <CreateNote
        textHandler={textHandler}
        inputText={inputText}
        saveHandler={saveHandler}
      />
    </div>
  );
};
export default Notes;
