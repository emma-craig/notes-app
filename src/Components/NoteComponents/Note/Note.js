import React from "react";
import NoteBody from "../NoteBody/NoteBody";
import NoteFooter from "../NoteFooter/NoteFooter";
import './Note.css'
const Note = ({ id, text, deleteHandler }) => {
  return (
    <div className="note">
      <NoteBody text={text} />
      <NoteFooter id={id} deleteHandler={deleteHandler} />
    </div>
  );
};
export default Note;
