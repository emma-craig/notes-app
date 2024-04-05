import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./../Note/Note.css";
interface INoteProps {
  id: string
  deleteHandler: (id:string) => void
}
const NoteFooter = ({ id, deleteHandler } : INoteProps) => {
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
