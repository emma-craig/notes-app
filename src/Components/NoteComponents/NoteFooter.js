import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const NoteFooter = ({ id, deleteHandler }) => {
  return (
    <>
      <DeleteForeverIcon onClick={() => deleteHandler(id)} aria-hidden="true" />
    </>
  );
};
export default NoteFooter;
