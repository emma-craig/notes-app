import React from "react"
import NoteBody from "./NoteBody";
import NoteFooter from "./NoteFooter";

const Note = ({id,text, deleteHandler}) => {
  return (
    <>
      <NoteBody text={text}/>
      <NoteFooter id={id} deleteHandler={deleteHandler}/>
    </>
  );
};
export default Note
