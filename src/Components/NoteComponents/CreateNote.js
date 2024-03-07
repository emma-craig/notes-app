import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CreateNote = ({ textHandler, saveHandler, inputText }) => {
  return (
    <>
      <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
        <textarea
          value={inputText}
          onChange={textHandler}
          cols="10"
          rows="5"
          placeholder="Type...."
          maxLength="100"
        />
             <div className="note__footer">
             <AddCircleOutlineIcon className= 'note__save' onClick={saveHandler} />

      </div>
      </div>

    </>
  );
};
export default CreateNote;
