import { v4 as uuid } from 'uuid';
import React, { useState, useEffect, RefObject, ChangeEvent } from 'react';
import Note from './Note/Note';
import CreateNote from './CreateNote';
import './NoteApp.css';

interface INotes {
  id: string
  text: string
}
const Notes = () => {
  const storedNotes: INotes[] = JSON.parse(localStorage.getItem('Notes') || '');
  const [notes, setNotes] = useState(storedNotes);
  const [inputText, setInputText] = useState<string>('');

  const textHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setInputText(e.target.value);

  const saveHandler = (inputRef: RefObject<HTMLTextAreaElement>) => {
    setNotes((prevState) => [...prevState, { id: uuid(), text: inputText }]);
    setInputText('');

    inputRef.current?.focus();
  };

  const deleteHandler = (id: string) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    try {
      localStorage.setItem('Notes', JSON.stringify(notes));
    } catch (error) {
      // silence is a true friend
    }
  }, [notes]);
  useEffect(() => {
    // get stored notes on first render
    try {
      const data: INotes[] = JSON.parse(localStorage.getItem('Notes') || '');
      if (data) {
        setNotes(data);
      }
    } catch (error) {
      // silence is a true friend
    }
  }, []);
  return (
    <div className="notes">
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
