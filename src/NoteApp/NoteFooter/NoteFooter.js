import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./../Note/Note.css";

const NoteFooter = ({ id, deleteHandler }) => {
  return (
    <div className="note__footer" style={{ justifyContent: "flex-end" }}>
      <DeleteForeverIcon
        className="note__delete"
        onClick={() => deleteHandler(id)}
        aria-hidden="true"
      />
    </div>
  );
};
export default NoteFooter;
