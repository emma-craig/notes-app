import React from "react";
import NoteBody from "../NoteBody/NoteBody";
import NoteFooter from "../NoteFooter/NoteFooter";
import "./Note.css";

interface INoteProps {
  id: string
  text: string
  deleteHandler: (id:string) => void
}
const Note = ({ id, text, deleteHandler }: INoteProps) => {
  return (
    <div className="note">
      <NoteBody text={text} />
      <NoteFooter id={id} deleteHandler={deleteHandler} />
    </div>
  );
};
export default Note;
